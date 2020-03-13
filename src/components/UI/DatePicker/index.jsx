import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment';
import { DayPickerStyled, CalendarIcon } from './styled';
import { formatMonthTitle, parseDateFromString, isRtl } from '../../../utils'
import { IconCalendarBlue } from '../SvgIcons/icon-calendar-blue';

class DatePickerComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: ''
    };
  }
  
  handleChange = (day) => {
    const formatDate = formatMonthTitle(day);
    this.setState({ selectedDay: day });
    this.props.changeDateHandler(formatDate)
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let selectedDay = new Date();
    if(nextProps.selectedDate) {
      selectedDay = parseDateFromString(nextProps.selectedDate)
    }
    return {
      selectedDay
    };
  }
  
   render() {
    const { selectedDay } = this.state
    return (
      <DayPickerStyled error={this.props.error} type={this.props.type}>
        <CalendarIcon rtl={isRtl(this.props.lang)} error={this.props.error} type={this.props.type}>
            <IconCalendarBlue />
        </CalendarIcon>
        <DayPickerInput
          format='LL'
          value={selectedDay}
          parseDate={parseDate}
          formatDate={formatDate}
          onDayChange={day => this.handleChange(day)}
          dayPickerProps={{
            locale: this.props.lang,
            localeUtils: MomentLocaleUtils,
          }}
          placeholder={'Month Day, Year'}
        />
      </DayPickerStyled>
    );
  }
}

export default DatePickerComponent;
