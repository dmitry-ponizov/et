import React from 'react'
import { FieldStyled, IconBlock, Title, Value } from './styled';
import { Props } from './types';

const Field: React.FC<Props> = ({icon, title, value}) => {
  return (
      <FieldStyled>
          <IconBlock>
              {icon}
              <Title>{title}</Title>
          </IconBlock>
          <Value>{value}</Value>
      </FieldStyled>
  )
}
export default Field;