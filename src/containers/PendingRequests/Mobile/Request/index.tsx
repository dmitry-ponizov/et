import * as React from 'react';
import { Props } from './types';
import { IconRequests } from '../../../../components/UI/SvgIcons/icon-requests';
import { IconRequestsCalendar } from '../../../../components/UI/SvgIcons/icon-request-calendar';
import RowMobile from '../../../../components/UI/Mobile/Card/Row/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Card } from '../../../../styledTheme/globalStyles';


const Request: React.FunctionComponent<Props & InjectedIntlProps> = ({ request, selectRequest, intl }) => {
  return (
    <Card onClick={() => selectRequest(request)}>
      <RowMobile title={intl.formatMessage({ id: `requests.employee_number`})} value={request.employee_number} />
      <RowMobile title={intl.formatMessage({ id: `requests.full_name`})} value={request.full_name} />
      <RowMobile title={intl.formatMessage({ id: `requests.type`})} value={request.type} icon={<IconRequests />} />
      <RowMobile title={intl.formatMessage({ id: `requests.date_stamp`})}  value={request.date_stamp} icon={<IconRequestsCalendar />} />
    </Card>
  );
};

export default injectIntl(Request);
