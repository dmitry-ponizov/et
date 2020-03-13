import React from 'react';
import { Props } from './types';
import { InfoBlockStyled, Title, Value } from './styled';
import CountUp from 'react-countup';

const TeamInfoBlock: React.FunctionComponent<Props> = ({title, value, icon, color, clickHandler}) => {
  return(
    <InfoBlockStyled color={color} onClick={clickHandler && clickHandler}>
        <div className="number">
            <Title>{title}</Title>
            <Value color={color}>
              {value ? <CountUp end={value} duration={2}/> : 0}
            </Value>
        </div>
        <div>
            {icon}
        </div>
    </InfoBlockStyled>
  );
};
export default TeamInfoBlock;
