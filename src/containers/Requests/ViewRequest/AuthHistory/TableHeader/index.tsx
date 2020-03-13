import React from 'react'
import { Props } from './types';
import { Table } from 'semantic-ui-react';
import { injectIntl } from 'react-intl';

const TableHeader: React.FC<Props> = ({ columns, intl }) => {
    return (
        <>
            {columns.map((column: string) =>
                <Table.HeaderCell
                    key={column}
                    className={`${column === 'created_by' ? 'requestTable' : ''}`} >
                    {intl.formatMessage({ id: `requests.${column}`})}
                </Table.HeaderCell>)}
        </>
    )
}
export default injectIntl(TableHeader);