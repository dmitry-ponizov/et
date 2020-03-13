import React from 'react'
import { ExceptionStyled, Code, Desc } from './styled';
import { Props } from './types';
import { exceptionColors } from '../../../containers/UserProfile/constants';

const Exception: React.FC<Props> = ({ icon, code, description }) => {
  return (
    <ExceptionStyled>
          <div>{icon}</div>
        <Code color={exceptionColors[code]}>{code}</Code>
        {description && <Desc>- {description}</Desc>}
    </ExceptionStyled>
  )
}
export default Exception;