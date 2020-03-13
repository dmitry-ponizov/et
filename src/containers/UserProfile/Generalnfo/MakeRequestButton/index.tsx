import React from 'react'
import { MakeRequestStyled } from './styled';
import { Props } from './types';

const MakeRequestBtn: React.FC<Props> = ({title, clickHandler, filled, rtl}) => {
    return (
        <MakeRequestStyled rtl={rtl} onClick={clickHandler} filled={filled}>
            {title}
        </MakeRequestStyled>
    )
}
export default MakeRequestBtn;