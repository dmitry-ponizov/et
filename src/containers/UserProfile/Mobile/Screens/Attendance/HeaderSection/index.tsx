import * as React from 'react';
import { HeaderSectionStyled, Title, Value } from './styled';
import { Props } from './types';

const HeaderSection: React.FunctionComponent<Props> = ({title, value}) => {
  return (
      <HeaderSectionStyled>
          <Title>{title}</Title>
          <Value>{value}</Value>
      </HeaderSectionStyled>
  );
};

export default HeaderSection;
