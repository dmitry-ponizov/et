import React from 'react'
import { DropDownRowStyled, TitleStyled, CheckboxStyled } from './styled';
import { Props } from './types';
import {  Checkbox } from 'semantic-ui-react';

const DropDownRow: React.FC<Props> = ({ title, changeHandler, id, checked }) => {
    return (
        <DropDownRowStyled selected={checked} onClick={() => changeHandler(id)}>
            <CheckboxStyled>
                <Checkbox onClick={() => changeHandler(id)} checked={checked}/>
            </CheckboxStyled>
            <TitleStyled>
                {title.toLowerCase()}
            </TitleStyled>
        </DropDownRowStyled>
    )
}
export default DropDownRow;