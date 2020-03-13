import React from 'react';
import { Container } from './styled';
import { Props } from './types';
import { IDivision } from '../../../../store/company/types';
import Division from './Division/index';

const DivisionsPanel: React.FunctionComponent<Props> = ({
  divisions,
  activeDivision,
  selectDivision
}) => {

  return(
      <Container>
          {divisions.map((devision: IDivision) => 
          <Division 
            division={devision} 
            key={devision.id} 
            activeDivision={activeDivision}
            selectDivision={selectDivision}
          />)}
      </Container>
  );
};

export default DivisionsPanel;
