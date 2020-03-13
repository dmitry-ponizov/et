import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import InfoBlock from './InfoBlock';
import { CalendarSection, ApplyBtn, ButtonSection } from './styled';
import {  injectIntl } from 'react-intl';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ar';
import 'moment/locale/en-au';


class CalendarProcessedData extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick = () => {
    this.setState(this.getInitialState());
  }

  applyPeriodHandler = () => {
    const { from, to } = this.state;
      if(from && to) {
        this.props.applyPeriod(from, to)
      }
      return;
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <CalendarSection>
        <InfoBlock from={from} to={to} handleResetClick={this.handleResetClick} lang={this.props.lang}/>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          locale={this.props.lang}
          localeUtils={MomentLocaleUtils}
        />
        <ButtonSection onClick={this.applyPeriodHandler}>
          <ApplyBtn isActive={from && to}>{this.props.intl.formatMessage({ id: `sortFields.apply`})}</ApplyBtn>
        </ButtonSection>
      </CalendarSection>
    );
  }
}

export default injectIntl(CalendarProcessedData)
