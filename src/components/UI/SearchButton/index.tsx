import React from 'react'
import { SearchButtonStyled, IconStyled, TitleStyled } from './styled';
import { Props } from './types';

const SearchButton: React.FC<Props> = ({ title, icon, fillable, clickHandler }) => {
    return (
        <SearchButtonStyled fillable={fillable} onClick={clickHandler && clickHandler}>
            {icon && <IconStyled>{icon}</IconStyled>}
            <TitleStyled>{title}</TitleStyled>
        </SearchButtonStyled>
    )
}
export default SearchButton
