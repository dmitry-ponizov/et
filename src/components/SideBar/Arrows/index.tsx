import React from 'react';
import { Props } from './types';
import { ArrowsStyled } from './styled';
import { RightArrowIcon, DownArrowIcon } from '../../../constants/images';

const Arrows: React.FC<Props> = ({ active }) => {
  return (
    <ArrowsStyled>
      <img src={!active ? RightArrowIcon : DownArrowIcon} alt="arrow" />
    </ArrowsStyled>
  );
};

export default Arrows;