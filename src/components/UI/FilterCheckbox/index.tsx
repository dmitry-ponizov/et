import React from 'react';
import { Props } from './types';
import { FilterCheckboxStyled, Title, ErrorStyled, Wrap, CheckboxContainer } from './styled';
import { Checkbox } from 'semantic-ui-react';


const FilterCheckbox: React.FC<Props> = ({ title, checked, changeHandler, error, name, rtl }) => {
    let handledError = ''
    if (error && error[name]) {
        handledError = error[name].join(' ')
    }
    const onchangeHandler = () => {
        changeHandler(!checked)
    }
    
    return (
        <Wrap>
            <FilterCheckboxStyled>
                <Title rtl={rtl}>{title}</Title>
            </FilterCheckboxStyled>
            <CheckboxContainer>
                <Checkbox checked={checked} onChange={onchangeHandler}/>
            </CheckboxContainer>
            <ErrorStyled >{handledError}</ErrorStyled>
        </Wrap>
    )
}

export default FilterCheckbox;