import React from 'react';
import { Props } from './types';
import { FilterInputStyled, Title, ErrorStyled } from './styled';
import InputComponent from '../Input/index';

const FilterInput: React.FC<Props> = ({ title, value, changeHandler, error, name, rtl }) => {
    let handledError = ''
    if (error && error[name]) {
        handledError = error[name][0]
    }
    
    const right = `-${handledError.length * 6.5}px`;
    return (
        <FilterInputStyled>
                <Title rtl={rtl}>{title}</Title>
                <InputComponent 
                    placeholder='Ticket ID'
                    styleClass='ticketIdInput'
                    changeHandler={changeHandler}
                    name='ticket_id'
                    value={value}
                    error={Boolean(handledError)}
                    type="text"
                />
            <ErrorStyled right={right}>{handledError}</ErrorStyled>
        </FilterInputStyled>
    )
}
export default FilterInput;