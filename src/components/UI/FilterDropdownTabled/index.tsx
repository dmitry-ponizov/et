import React, { useState } from 'react'
import { DropDownContainer, LabelDropDown, DropDown, MenuStyled, DropDownBlock, ErrorStyled, Wrap } from './styled';
import { IconDown } from '../SvgIcons/icon-down';
import { Props } from './types';
import TableHeaderText from '../Table/TableHeader/Text/index';
import TableComponent from '../Table/index';
import TableData from './TableData/index';
import { injectIntl, FormattedMessage, InjectedIntlProps } from 'react-intl';
import { Loader } from 'semantic-ui-react';
import Backdrop from '../BackDrop/index';


const FilterDropDownTabled: React.FC<Props & InjectedIntlProps> = (
  { title, 
    columns, 
    data, 
    selectedId, 
    selected, 
    selectHandler, 
    loading, 
    height, 
    width,
    error,
    name,
    left,
    pager,
    paginationHandler,
    rtl
  }) => {

  const [active, activeHandler] = useState(false)
  const onClick = () => {
    activeHandler(!active);
  }
  const selectItem = (item: any) => {
    activeHandler(false);
    selectHandler(item)
  }
  const tableHeader = <TableHeaderText titleKey="dropdown" columns={columns} />
  
  let tableBody: React.ReactElement[] | null = null;
  if (data) {
    tableBody = data.map((item: any) =>
      <TableData
        key={item.id}
        item={item}
        fields={columns}
        selectHandler={selectItem}
        selectedId={selectedId}
      />
    );
  }
  let handledError = ''
  if (error && error[name]){
    handledError = error[name].join(' ')
  }
  return (
    <Wrap>
      <DropDownContainer>
        <Backdrop show={active} clicked={onClick} transparent={true} />
        <LabelDropDown rtl={rtl}><div>{title}:</div></LabelDropDown>
        <DropDownBlock>
          <DropDown onClick={onClick} error={Boolean(handledError)}>
            <span>{selected ? selected : <FormattedMessage id={`dropdown.any`} /> }</span>
            <span>{loading ? <Loader active inline size='mini' />  : ''}</span>
            <IconDown />
          </DropDown>
          {active &&
            <MenuStyled height={height} width={width} left={left} rtl={rtl}>
              <TableComponent
                celled={false}
                tableHeader={tableHeader}
                tableBody={tableBody}
                withoutHeader={false}
                type="dropdown"
                paginationHandler={paginationHandler && paginationHandler}
                colspan={columns.length}
                pager={pager}
              />
            </MenuStyled>}
        </DropDownBlock>
      </DropDownContainer>
      <ErrorStyled >{handledError}</ErrorStyled>
    </Wrap>
  )
}

export default injectIntl(FilterDropDownTabled);