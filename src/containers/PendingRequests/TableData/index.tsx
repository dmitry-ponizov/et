import React, { memo } from 'react';
import { Table } from 'semantic-ui-react';
import { Props } from './types';
import { validateFieldData } from '../../../utils';
import CheckboxCell from '../../../components/UI/Table/TableBody/CheckBoxCell/index';
import Label from '../../../components/UI/Label/index';

const TableData: React.FC<Props> = ({ cells, fields, onChangeHandler, checked }) => {
  return (
    <Table.Row>
    <CheckboxCell onChangeHandler={onChangeHandler} id={cells.id} checked={checked}/>
    {fields.map((field: string, i: any) => {
      switch (field) {
        case 'status':
            return validateFieldData(<Label type={cells[field].toLowerCase()} />, i)
        default:
          return validateFieldData(cells[field], i)
      }
    })}
  </Table.Row>
  );
};

export default memo(TableData);