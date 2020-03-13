import React from 'react'
import { FullNameStyled} from './styled'
import { Props } from './types';
import Avatar from '../../../../../../components/UI/Avatar/index';

const FullName: React.FC<Props> = ({ name, userId, sessionId }) => {
  return (
    <FullNameStyled>
      <Avatar userId={userId} sessionId={sessionId} />
      <div>{name}</div>
    </FullNameStyled>
  )
}
export default FullName;