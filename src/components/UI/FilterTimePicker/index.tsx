import React from 'react'
import { FilterTimePickerContainer, LabelFilterTimePicker, ErrorStyled, Wrap } from './styled';
import { Props } from './types';
import TimePickerComponent from '../TimePicker';

const FilterTimePicker: React.FC<Props> = ({ title, changeTimeHandler, name, error, selectedTime, rtl }) => {
    let handledError = ''
    if (error && error[name]) {
        handledError = error[name].join(' ')
    }
    
    return (
        <Wrap>
            <FilterTimePickerContainer>
                <LabelFilterTimePicker rtl={rtl}><div>{title}:</div></LabelFilterTimePicker>
                <TimePickerComponent changeTimeHandler={changeTimeHandler} selectedTime={selectedTime} error={Boolean(handledError)}/>
            </FilterTimePickerContainer>
            <ErrorStyled>{handledError}</ErrorStyled>
        </Wrap>
    )
}
export default FilterTimePicker;