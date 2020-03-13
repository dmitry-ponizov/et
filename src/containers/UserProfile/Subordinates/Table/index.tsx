import React from 'react'
import { Table } from 'semantic-ui-react'
import { TableStyled } from './styled';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { Props } from './types';


const EmployeesTable: React.FC<Props> = ({ data, sessionId, totalRows, currentPage, paginationHandler, rtl }) => (
    <TableStyled rtl={rtl}>
        <Table striped>
            <TableHeader />
            <TableBody data={data} sessionId={sessionId}/>
            <TableFooter totalRows={totalRows} currentPage={currentPage} paginationHandler={paginationHandler}/>
        </Table>
    </TableStyled>
)

export default EmployeesTable