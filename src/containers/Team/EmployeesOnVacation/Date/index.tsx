import * as React from 'react';
import { DateStyled, Period } from './styled';
import { Props } from './types';
import moment from 'moment';
import { IconCalendarBlue } from '../../../../components/UI/SvgIcons/icon-calendar-blue';


const DateField: React.FunctionComponent<Props> = ({startDate, endDate}) => {
  return(
    <DateStyled>
        <IconCalendarBlue />
        <Period>{moment(new Date(startDate)).format('DD.MM.YYYY')} - {moment(new Date(endDate)).format('DD.MM.YYYY')}</Period>
    </DateStyled>
  );
};

export default DateField;
