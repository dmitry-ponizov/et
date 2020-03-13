import React from 'react';
import { Props } from './types';
import { Card } from '../../../../../styledTheme/globalStyles';
import RowMobile from '../../../../../components/UI/Mobile/Card/Row/index';
import moment from 'moment';
import Avatar from '../../../../../components/UI/Avatar/index';
import { AvatarWrapper } from './styled';
import { IconRequestsCalendar } from '../../../../../components/UI/SvgIcons/icon-request-calendar';
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
      <RowMobile title={intl.formatMessage({ id: `global.from`})} value={moment(new Date(user.start_date)).format('DD.MM.YYYY')} icon={<IconRequestsCalendar />} />
      <RowMobile title={intl.formatMessage({ id: `global.to`})} value={moment(new Date(user.end_date)).format('DD.MM.YYYY')} icon={<IconRequestsCalendar />} />
    </Card>
  );
};

export default injectIntl(UserCard);
