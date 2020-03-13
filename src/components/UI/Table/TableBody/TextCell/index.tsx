import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { Props } from './types';

const TableBodyCell: React.FC<Props> = ({ text }) => {
    return (
        <Table.Cell>{ text }</Table.Cell>
    );
};

export default TableBodyCell;