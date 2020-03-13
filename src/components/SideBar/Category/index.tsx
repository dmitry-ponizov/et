import React from 'react'
import { CategoryStyled, Point, CategoryTitle } from './styled';
import { Props } from './types';
import { FormattedMessage } from 'react-intl';
const slugify = require('slugify');


const Category: React.FC<Props> = ({ category, activeMenu, selectCategory }) => {
    const clickHandler = () => {
        selectCategory(category.route)

    };
    return (
        <CategoryStyled onClick={clickHandler}  >
            {activeMenu === category.route && <Point />}
            <CategoryTitle active={activeMenu === category.route}>{<FormattedMessage id={`global.${slugify(category.name.toLowerCase(), '_')}`} />}</CategoryTitle>
        </CategoryStyled>

    );
};

export default Category;