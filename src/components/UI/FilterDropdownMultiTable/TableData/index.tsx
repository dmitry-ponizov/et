import React, { memo } from 'react';
import { Props } from './types';
import { Table } from 'semantic-ui-react';
import { validateFieldData } from '../../../../utils';
import CheckboxCell from '../../Table/TableBody/CheckBoxCell/index';


const TableData: React.FC<Props> = ({ item, fields, selectHandler, checked}) => {
    return (
        <Table.Row className={`${checked ? 'selectedRow' : ''}`} >
            <CheckboxCell onChangeHandler={selectHandler} id={item.id} checked={checked}/>
            {fields.map((field:string, i: any) => {
                return validateFieldData(item[field], i)
            })}
        </Table.Row>
    )
}
export default memo(TableData);