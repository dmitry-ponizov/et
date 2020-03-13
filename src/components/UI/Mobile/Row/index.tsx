import React from 'react'
import { RowStyled, CellTitleStyled, CellValueStyled, CellSecondValueStyled } from './styled';
import { Props } from './types';

const RowMobile: React.FC<Props> = ({ title, value, secondValue, classStyleValue}) => {
    
    return (
        <RowStyled>
            <CellTitleStyled className="rowTitle">     
             { title }
            </CellTitleStyled>
            <CellValueStyled className={classStyleValue}>{value}</CellValueStyled>
            {secondValue && <CellSecondValueStyled>{secondValue}</CellSecondValueStyled>}
        </RowStyled>
    )
}
export default RowMobile;