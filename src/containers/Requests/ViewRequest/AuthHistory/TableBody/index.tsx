import React from 'react'
import { Props } from './types';
import { Table } from 'semantic-ui-react';

const TableBody: React.FC<Props> = ({ authHistory }) => {
    return (
        <Table.Row >
            <Table.Cell className='requestTable' >{authHistory.created_by}</Table.Cell >      
            <Table.Cell>{authHistory.created_date}</Table.Cell >      
            <Table.Cell>{authHistory.authorized ? 'Yes': 'No'}</Table.Cell >      
        </Table.Row>
    )
}
export default TableBody;