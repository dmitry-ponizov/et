import * as React from 'react';
import { Container } from './styled';
import { Props } from './types'

const Division: React.FunctionComponent<Props> = ({division, activeDivision, selectDivision}) => {
  return(
      <Container active={activeDivision.id === division.id} onClick={() => selectDivision(division)}>
          {division.name}
      </Container>
  );
};

export default Division;
