import React from 'react';
import { Props } from './types';
import { ButtonStyled } from './styled';

const HamburgerMenu: React.FC<Props> = ({ toggleHandler }) => {
  return (
    <ButtonStyled onClick={toggleHandler}>
       <div className="container"  >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
    </ButtonStyled>
  );
};

export default HamburgerMenu;
