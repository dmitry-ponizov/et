import React from 'react';
import { SubordinateStyled, EmployeeNumber, Fullname, Position, InfoBlock, InfoSection, AvatarWrap } from './styled';
import { Props } from './types';
import { navigate } from '@reach/router';
import { IconArrowRight } from '../../SvgIcons/icon-arrow-right';
import Avatar from '../../Avatar/index';

const Subordinate: React.FunctionComponent<Props> = ({ user, sessionId }) => {

  const viewProfile = () => {
    navigate(`/user/${user.id}`)
  }

  return (
    <SubordinateStyled onClick={viewProfile}>
      <InfoSection>
        <AvatarWrap>
           <Avatar userId={user.id} sessionId={sessionId} />
        </AvatarWrap>
        <InfoBlock>
          <EmployeeNumber>{`#${user.employee_number}`}</EmployeeNumber>
          <Fullname>{user.name || user.full_name}</Fullname>
          <Position>{user.position || user.title}</Position>
        </InfoBlock>
      </InfoSection>
      <IconArrowRight />
    </SubordinateStyled>
  );
};


export default Subordinate;
