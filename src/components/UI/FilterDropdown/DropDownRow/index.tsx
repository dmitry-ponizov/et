import React from 'react'
import { DropDownRowStyled, TitleStyled } from './styled';
import { Props } from './types';

const DropDownRow: React.FC<Props> = ({ title, changeHandler, selected, id }) => {
    return (
        <DropDownRowStyled selected={selected} onClick={() => changeHandler(id)}>
            <TitleStyled>
                {title}
            </TitleStyled>
        </DropDownRowStyled>
    )
}
export default DropDownRow;