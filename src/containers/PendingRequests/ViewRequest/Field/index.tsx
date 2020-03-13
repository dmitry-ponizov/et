import React from 'react'
import { Props } from './types';
import { FieldStyled, LabelStyled, TitleStyled } from './styled';

const Field: React.FC<Props> = ({ label, title, type }) => {
    return (
        <FieldStyled type={type}>
            <LabelStyled>{label}:</LabelStyled>
            <TitleStyled>{title}</TitleStyled>
        </FieldStyled>
    )
}
export default Field;