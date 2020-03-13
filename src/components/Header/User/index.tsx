import * as React from 'react';
import { UserStyled, FullNameStyled, AvatarWrap, Status } from './styled';
import Avatar from '../../UI/Avatar';
import { Props } from './types';
import { useOffline } from '../../../hooks/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const UserHeader: React.FunctionComponent<Props & InjectedIntlProps> = ({ user, sessionId, avatar, rtl, intl }) => {
  const offline = useOffline()
  return (
    <UserStyled>
      <AvatarWrap rtl={rtl}>
        <Avatar userId={user.id} sessionId={sessionId} avatar={avatar} />
      </AvatarWrap>
      <div>
        <FullNameStyled>
          <div>
            {user.full_name}
          </div>
          <Status  color={offline ? '#F64540' : '#1BA953'} >
            {offline ? intl.formatMessage({ id: `global.offline` }) :  intl.formatMessage({ id: `global.online` })}
          </Status>
        </FullNameStyled>
      </div>
    </UserStyled>
  );
};

export default injectIntl(UserHeader);
