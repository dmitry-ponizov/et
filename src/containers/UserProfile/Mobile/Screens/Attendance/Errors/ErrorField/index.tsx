import React from 'react'
import { ErrorFieldStyled, ExceptionStyled, Description } from './styled'
import { Props } from './types'

const ErrorField: React.FC<Props> = ({exception, desc}) => {
  return (
    <ErrorFieldStyled>
       <ExceptionStyled>
            {exception}
       </ExceptionStyled>
       <Description>
            <span> - </span> {desc}
       </Description>
    </ErrorFieldStyled>
  )
}
export default ErrorField;
