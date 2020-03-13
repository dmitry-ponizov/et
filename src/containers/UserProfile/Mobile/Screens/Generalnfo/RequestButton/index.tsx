import * as React from 'react';
import { RequestButtonStyled, IconStyled, TitleStyled } from './styled';
import { Props } from './types';

const RequestButton: React.FC<Props> = ({icon, title, clickHandler}) => {
  return(
    <RequestButtonStyled onClick={clickHandler}> 
        <IconStyled>{icon}</IconStyled>
        <TitleStyled>{title}</TitleStyled>
    </RequestButtonStyled>
  );
};

export default RequestButton;
