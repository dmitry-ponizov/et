import  React from 'react';
import { Props } from './types';
import { InfoBlockBlock, Circle, Title, Value} from './styled';
import CountUp from 'react-countup';


const InfoBlockTeamMobile: React.FunctionComponent<Props> = ({icon, color, title, value, clickHandler}) => {
  return(
    <InfoBlockBlock onClick={clickHandler}>
        <Circle color={color}>
            {icon}
        </Circle>
        <Title>{title}</Title>
        <Value>{value ? <CountUp end={value} duration={2}/> : 0}</Value>
    </InfoBlockBlock>
  );
};

export default InfoBlockTeamMobile;
