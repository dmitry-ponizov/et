import React, { memo } from 'react';
import { Table } from 'semantic-ui-react';
import { Props } from './types';
import { validateFieldData } from '../../../../utils';
import Label from '../../../../components/UI/Label/index';


const TableData: React.FC<Props> = ({ cells, fields }) => {
  return (
    <Table.Row>
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