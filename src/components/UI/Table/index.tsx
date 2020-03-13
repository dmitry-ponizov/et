import React from 'react';
import { Table } from 'semantic-ui-react';
import { AnimatedTableStyled } from './styled';
import { Props } from './types';
import { useSpring } from 'react-spring';
import CheckboxHeaderCell from './TableHeader/CheckBoxCell/index';
import TableFooter from './TableFooter';


const TableComponent:React.FC<Props> = ({
  tableHeader,
  tableBody,
  celled,
  withoutHeader,
  selected,
  checkAllHandler,
  type,
  checked,
  paginationHandler,
  colspan,
  pager,
  isLoading
}) => {
  const fade = useSpring({from: { opacity: 0 }, opacity: 1});
  let countFields = 0;
  if(tableHeader) {
    countFields = Object.values(tableHeader).length;
  }
  return (
      <AnimatedTableStyled style={fade} overflow={countFields} type={type}>
        <Table striped singleLine padded fixed selectable celled={celled}>
          {!withoutHeader && (
            <Table.Header className='uiTableHeader'>
              <Table.Row>            
                {selected && <CheckboxHeaderCell checkAllHandler={checkAllHandler} checked={checked} /> }
                {tableHeader}
              </Table.Row>
            </Table.Header>
          )}
          <Table.Body className='uiTableBody'>{tableBody}</Table.Body>
          {pager && <TableFooter pager={pager} paginationHandler={paginationHandler} colspan={colspan}/>}
        </Table>
      </AnimatedTableStyled>
    );
};

export default TableComponent;
