import React from 'react'
import { TableStyled } from './styled';
import { Props } from './types';

const TableMobile:React.FC<Props> = ({rows}) => {
    return (
        <TableStyled>
            {rows}
        </TableStyled>
    )
}
export default TableMobile;