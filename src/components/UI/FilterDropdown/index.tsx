import React, { useState } from 'react'
import { DropDownContainer, LabelDropDown, DropDown, MenuStyled, DropDownBlock, ErrorStyled, Wrap } from './styled';
import { IconDown } from '../SvgIcons/icon-down';
import { Props } from './types';
import DropDownRow from './DropDownRow/index';
import { FormattedMessage } from 'react-intl';
import { IconArrowUp } from '../SvgIcons/icon-arrow-up';
import { Loader } from 'semantic-ui-react';
import Backdrop from '../BackDrop/index';

const FilterDropDown: React.FC<Props> = ({ title, clickHandler, data, selected, loading, error, name, rtl  }) => {
  const [active, activeHandler] = useState(false)
  const onClick = () => {
    activeHandler(!active);
  }
  const changeHandler = (id: any) => {
    activeHandler(!active);
    clickHandler(id)
  }
  const component = data && Object.keys(data).map((item: any) => 
    <DropDownRow 
      selected={selected === item} 
      title={data[item]} key={item} 
      changeHandler={changeHandler} 
      id={item}
    />)
  let handledError = ''
  if (error && error[name]) {
    handledError = error[name].join(' ')
  }

  return (
    <Wrap>
      <DropDownContainer>
        <Backdrop show={active} clicked={onClick} transparent={true} />
        <LabelDropDown rtl={rtl}>
          <div>{title}:</div>
        </LabelDropDown>
        <DropDownBlock>
          <DropDown onClick={onClick} active={active} error={Boolean(handledError)}>
            <span>
              {selected && !loading && data ? 
                data[selected] : 
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
      </DropDownContainer>
        <ErrorStyled >{handledError}</ErrorStyled>
    </Wrap>
  )
}
export default FilterDropDown;