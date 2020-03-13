import React from 'react';
import { Props } from './types';
import { Table } from 'semantic-ui-react';
import { validateFieldData } from '../../../../utils';
import Label from '../../Label/index';

const TableData: React.FC<Props> = ({ item, fields, selectHandler, selectedId }) => {
    return (
        <Table.Row onClick={() => selectHandler(item)} className={`${selectedId === item.id ? 'selectedRow' : ''}`}>
            {fields.map((field: string, i: any) => {
                switch (field) {
                    case 'status':
                        return validateFieldData(<Label type={item[field].toLowerCase()} />, i)
                    case 'full_arabic_name':
                        return validateFieldData(item[field], i, 'full_arabic_name')
                    default:
                        return validateFieldData(item[field], i)
                }
            })}
        </Table.Row>
    )
}
export default TableData;