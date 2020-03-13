import React, { useState } from 'react'
import { DropDownContainer, LabelDropDown, DropDown, MenuStyled, DropDownBlock, ErrorStyled, SelectedItems, TableMenu, ApplyContainer } from './styled';
import { IconDown } from '../SvgIcons/icon-down';
import { Props } from './types';
import TableHeaderText from '../Table/TableHeader/Text/index';
import TableComponent from '../Table/index';
import TableData from './TableData/index';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Loader } from 'semantic-ui-react';
import Backdrop from '../BackDrop/index';
import SearchButton from '../SearchButton/index';

const FilterDropDownMultiTabled: React.FC<Props> = (
  { title, 
    columns, 
    data, 
    selectedIds, 
    intl, 
    selectHandler, 
    loading, 
    height, 
    width,
    error,
    name,
    checkAllHandler,
    left,
    checkedAll,
    rtl
  }) => {
  const [active, activeHandler] = useState(false)
  const onClick = () => {
    activeHandler(!active);
  }
  const selectItem = (item: any) => {
    selectHandler(item)
  }
  const applyHandler = () => {
    activeHandler(false);
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
        checked={selectedIds.includes(item.id)}
      />
    );
  }
  let handledError = ''
  if (error && error[name]){
    handledError = error[name].join(' ')
  }
  
  const right = `-${handledError.length * 6.5}px`;
  const paginationHandler = () => {}
  return (
    <DropDownContainer>
      <Backdrop show={active} clicked={onClick} transparent={true} />
      <LabelDropDown rtl={rtl}><div>{title}:</div></LabelDropDown>
      <DropDownBlock>
        <DropDown onClick={onClick} error={Boolean(handledError)}>
          <span>{Boolean(selectedIds.length) ?  `${selectedIds.length} items selected` : <FormattedMessage id={`dropdown.any`} /> }</span>
          <span>{loading ? <Loader active inline size='mini' />  : ''}</span>
          <IconDown />
        </DropDown>
        {active &&
          <MenuStyled height={height} width={width} left={left}>
            <SelectedItems>Selected items: {selectedIds.length}</SelectedItems>
            <TableMenu height={height} width={width}>
              <TableComponent
                celled={false}
                tableHeader={tableHeader}
                isLoading={false}
                tableBody={tableBody}
                withoutHeader={false}
                type="dropdown"
                selected={true}
                checkAllHandler={checkAllHandler}
                checked={checkedAll}
                paginationHandler={paginationHandler}
                colspan={columns.length}
              />
            </TableMenu>
            <ApplyContainer>   
              <SearchButton title="Apply" fillable={true} clickHandler={applyHandler}/>
            </ApplyContainer>
          </MenuStyled>}
      </DropDownBlock>
      <ErrorStyled right={right}>{handledError}</ErrorStyled>
    </DropDownContainer>
  )
}

export default injectIntl(FilterDropDownMultiTabled);