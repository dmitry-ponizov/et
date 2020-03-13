import  React from 'react';
import { PunchInTimeContainer, Value } from './styled';
import { Props } from './types';
import moment from 'moment';
import { IconIn } from '../SvgIcons/icon-in';


const PunchInTime: React.FunctionComponent<Props> = ({time}) => {
  return(
      <PunchInTimeContainer>
        <IconIn />
        <Value>{moment(time).format('LT')}</Value>
      </PunchInTimeContainer>
  ) ;
};

export default PunchInTime;
