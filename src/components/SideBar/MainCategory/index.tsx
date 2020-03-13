import React, { useState, useEffect } from 'react';
import {
  MainCategoryTitle,
  CategoriesList,
  CategoryName,
  MenuIcon,
  IconBlock
} from './styled';
import { Props } from './types';
import { CompanyCategories } from '../constants';
import { injectIntl } from 'react-intl';
import Category from '../Category/index';
import { IconDown } from '../../UI/SvgIcons/icon-down';
import { navigate } from '@reach/router';
import DynamicIcon from '../DynamicIcon/index';
const slugify = require('slugify');


const MainCategory: React.FC<Props> = ({
  setCurrentPageAction,
  mainCategory,
  activeMenu,
  intl
}) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (CompanyCategories.includes(activeMenu)) {
      setVisible(true);
    }
  }, [activeMenu])

  const visibleHandler = () => {
    setVisible(!visible)
    navigate(mainCategory.route);
    setCurrentPageAction(mainCategory.route)
  };

  const selectCategory = (categoryRoute: string) => {
    setCurrentPageAction(categoryRoute)
    navigate(categoryRoute);
  }

  const activeParentCategory = mainCategory.categories.find(category => category.route === activeMenu);
  const active = activeMenu === mainCategory.route || activeParentCategory;
  let subMenu: React.ReactElement[] | null = null;
  if (visible) {
    subMenu = mainCategory.categories.map((category: any, key) => (
      <Category
        key={key}
        category={category}
        activeMenu={activeMenu}
        selectCategory={selectCategory}
      />
    ));
  }

  return (
    <div>
      <MainCategoryTitle onClick={visibleHandler} active={active} >
        <IconBlock>
          <DynamicIcon tag={mainCategory.name} active={active} />
        </IconBlock>
        <CategoryName active={active} >{intl.formatMessage({ id: `global.${slugify(mainCategory.name, '_')}` })}</CategoryName>
        {Boolean(mainCategory.categories.length) &&
          <MenuIcon active={active} >
            <IconDown />
          </MenuIcon>}
      </MainCategoryTitle>
      <CategoriesList visible={visible}  >
        {subMenu}
      </CategoriesList>
    </div>
  );
}

export default injectIntl(MainCategory);
