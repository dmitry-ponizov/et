import * as React from 'react';
import { ExtraInfoCardStyled, IconContainer, ValueStyled, TitleStyled, VerticalLineStyled, RightBlock } from './styled';
import { Props } from './types';


const ExtraInfoCard: React.FC<Props> = ({icon, value, title}) => {
  return (
      <ExtraInfoCardStyled>
          <IconContainer>
                {icon}
          </IconContainer>
          <VerticalLineStyled />
          <RightBlock>       
            <TitleStyled>{title}</TitleStyled>
            <ValueStyled>{value}</ValueStyled>
          </RightBlock>
      </ExtraInfoCardStyled>
  );
};


export default ExtraInfoCard;
