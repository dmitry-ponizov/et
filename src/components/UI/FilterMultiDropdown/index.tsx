import React, { useState } from 'react'
import { DropDownContainer, LabelDropDown, DropDown, MenuStyled, DropDownBlock, ErrorStyled } from './styled';
import { IconDown } from '../SvgIcons/icon-down';
import { Props } from './types';
import DropDownRow from './DropDownRow/index';
import { FormattedMessage } from 'react-intl';
import { IconArrowUp } from '../SvgIcons/icon-arrow-up';
import { Loader } from 'semantic-ui-react';
import Backdrop from '../BackDrop/index';

const FilterMultiDropDown: React.FC<Props> = ({ title, selectedIds, clickHandler, data, loading, error, name  }) => {
  const [active, activeHandler] = useState(false)
  const onClick = () => {
    activeHandler(!active);
  }
  const changeHandler = (id: any) => {
    clickHandler(id)
  }

  const component = Object.keys(data).map((item: any) => 
    <DropDownRow 
      title={data[item]} key={item} 
      changeHandler={changeHandler} 
      id={item}
      checked={selectedIds.includes(item)}
    />)
  let handledError = ''
  if (error && error[name]) {
    handledError = error[name][0]
  }
  const right = `-${handledError.length * 6.5}px`;
  return (
    <DropDownContainer>
      <Backdrop show={active} clicked={onClick} transparent={true} />
      <LabelDropDown >
        <div>{title}:</div>
      </LabelDropDown>
      <DropDownBlock>
        <DropDown onClick={onClick} active={active} error={Boolean(handledError)}>
          <span>
            {Boolean(selectedIds.length) && !loading ? 
              `${selectedIds.length} items selected` : 
              <FormattedMessage id={`dropdown.any`} /> }
          </span>
          <span>{loading ? <Loader active inline size='mini' />  : ''}</span>
            {active ? <IconArrowUp /> :<IconDown /> }
        </DropDown>
        {active && 
        <MenuStyled>
          {component}
        </MenuStyled>}
      </DropDownBlock>
      <ErrorStyled right={right}>{handledError}</ErrorStyled>
    </DropDownContainer>
  )
}
export default FilterMultiDropDown;