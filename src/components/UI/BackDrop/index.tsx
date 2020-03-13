import React from 'react';
import { BackdropStyled } from './styled';
import { Props } from './types';

const Backdrop: React.FC<Props> = ({ clicked, show, transparent }) => (
    show ? <BackdropStyled transparent={transparent} onClick={clicked}></BackdropStyled> : null
)

export default Backdrop;