import React from 'react'
import { FieldStyled, IconBlock, Title, Value } from './styled';
import { Props } from './types';

const Field: React.FC<Props> = ({ icon, title, value, type, rowDirection}) => {
  return (
      <FieldStyled type={type} rowDirection={rowDirection}>
          <IconBlock>
              {icon}
              <Title>{title}:</Title>
          </IconBlock>
          <Value >{value}</Value>
      </FieldStyled>
  )
}
export default Field;