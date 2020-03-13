import React from 'react';
import { Props } from './types';
import { Card } from '../../../../../styledTheme/globalStyles';
import RowMobile from '../../../../../components/UI/Mobile/Card/Row/index';
import Avatar from '../../../../../components/UI/Avatar/index';
import { AvatarWrapper } from './styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const UserCard: React.FunctionComponent<Props & InjectedIntlProps> = ({ user, sessionId, clickHandler, intl }) => {
  
  const avatar =
    <AvatarWrapper>
      <Avatar userId={user.id} sessionId={sessionId} />
    </AvatarWrapper>

  return (
    <Card onClick={() => clickHandler(user.id)}>
      <RowMobile title={intl.formatMessage({ id: `global.employee`})} value={user.employee_number} />
      <RowMobile title={intl.formatMessage({ id: `global.full_name`})} value={user.full_name} icon={avatar} alignTop={true} />
    </Card>
  );
};

export default injectIntl(UserCard);
