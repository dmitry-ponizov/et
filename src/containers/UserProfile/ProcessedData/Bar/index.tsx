import React from 'react'
import { BarStyled, Title, Value } from './styled';
import { Props } from './types';

const Bar: React.FC<Props> = ({color, title, value}) => {
  return (
    <BarStyled color={color}>
        <Title>{title}</Title>
        <Value color={color}>{value}</Value>
    </BarStyled>
  )
}

export default Bar;