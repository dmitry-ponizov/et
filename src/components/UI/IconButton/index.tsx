import React from 'react';
import { ButtonStyled } from './styled';
import { Props } from './types';

const IconButtonUI: React.FC<Props> = ({ icon, clickHandler, loading, loadingIcon }) => {
  return (
    <ButtonStyled onClick={clickHandler}>
        { !loading ? icon : loadingIcon}
    </ButtonStyled>
  );
};
export default IconButtonUI;