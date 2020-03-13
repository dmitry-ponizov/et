import * as React from 'react';
import { Props } from './types';
import { IconRequests } from '../../../../../components/UI/SvgIcons/icon-requests';
import { IconRequestsCalendar } from '../../../../../components/UI/SvgIcons/icon-request-calendar';
import RowMobile from '../../../../../components/UI/Mobile/Card/Row/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Card } from '../../../../../styledTheme/globalStyles';
import Label from '../../../../../components/UI/Label';

const Request: React.FunctionComponent<Props & InjectedIntlProps> = ({ request, selectRequest, intl }) => {

  
  return (
    <Card onClick={() => selectRequest(request)}>
      <RowMobile title={intl.formatMessage({ id: `requests.request_type`})} value={request.type} icon={<IconRequests />} />
      <RowMobile title={intl.formatMessage({ id: `requests.date`})}  value={request.date_stamp} icon={<IconRequestsCalendar />} />
      <RowMobile title={intl.formatMessage({ id: `requests.status`})}  value={<Label type={request.status.toLowerCase()} />}  />
    </Card>
  );
};

export default injectIntl(Request);
