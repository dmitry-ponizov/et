import * as React from 'react';
import { ProcessedCardStyled, VerticalLine, Section, Title, Value, IconStyled } from './styled';
import { Props } from './types';

const ProcessedCard: React.FunctionComponent<Props> = ({ icon, title, value}) => {
  return (
    <ProcessedCardStyled>
        <IconStyled>
          {icon}
        </IconStyled>
        <VerticalLine />
        <Section>
            <Value>{value}</Value>
            <Title>{title}</Title>
        </Section>
    </ProcessedCardStyled>
  );
};

export default ProcessedCard;
