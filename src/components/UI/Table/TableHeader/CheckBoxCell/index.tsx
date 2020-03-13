import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { Props } from './types';

const CheckboxHeaderCell: React.FC<Props> = ({checkAllHandler, checked}) => {
  return (
    <Table.HeaderCell className="checkboxTableHeader">
      {checkAllHandler && <Checkbox  onChange={checkAllHandler} checked={checked} /> }
    </Table.HeaderCell>
  );
};
export default CheckboxHeaderCell;
