import React from 'react';
import { Props } from './types';
import { ButtonStyled } from './styled';

const ButtonComponent: React.FC<Props> = ({
  title,
  background,
  color,
  hoverBackground,
  clickHandler
}) => {
  return (
    <ButtonStyled
      background={background}
      color={color}
      hoverBackground={hoverBackground}
      onClick={clickHandler}
    >
      {title}
    </ButtonStyled>
  );
};
export default ButtonComponent;
