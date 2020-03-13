import React from 'react'
import { FilterDatePickerContainer, LabelFilterDatePicker, ErrorStyled, Wrap } from './styled';
import { Props } from './types';
import DatePickerComponent from '../DatePicker';

const FilterDatePicker: React.FC<Props> = ({ title, changeDateHandler, name, error, selectedDay, lang, rtl }) => {
    let handledError = ''
    if (error && error[name]) {
        handledError = error[name].join(' ')
    }
    return (
        <Wrap>
            <FilterDatePickerContainer>
                <LabelFilterDatePicker rtl={rtl}><div>{title}:</div></LabelFilterDatePicker>
                <DatePickerComponent lang={lang} selectedDate={selectedDay} changeDateHandler={changeDateHandler} error={Boolean(handledError)} />
            </FilterDatePickerContainer>
            <ErrorStyled>{handledError}</ErrorStyled>
        </Wrap>
    )
}
export default FilterDatePicker;