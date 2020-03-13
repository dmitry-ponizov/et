import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { Props } from './types';

const CheckboxCell: React.FC<Props> = ({ id, onChangeHandler, checked}) => {
  const clickHandler = () => {
    onChangeHandler(id)
  }
  return (
    <Table.Cell>
      <Checkbox  onClick={clickHandler} checked={checked} />
    </Table.Cell>
  );
};

export default CheckboxCell;
