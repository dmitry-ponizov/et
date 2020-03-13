import * as React from 'react';
import { Props } from './types';
import { CalendarFieldStyled, Value, Icon } from './styled';


const CalendarField: React.FunctionComponent<Props> = ({ value, icon, isData }) => {
  return (
    <CalendarFieldStyled>
      {isData && <>
        <Value>{value}</Value>
        <Icon>{value !== null && icon}</Icon>
      </>}
    </CalendarFieldStyled>
  );
};

export default CalendarField;
