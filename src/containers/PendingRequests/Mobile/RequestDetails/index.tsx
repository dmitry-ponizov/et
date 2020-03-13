import * as React from 'react';
import { Props } from './types'
import { RequestDetailsStyled, RequestDetailsContainer, ButtonSection, ApplyBtn, RequestDetailsSection } from './styled';
import HeaderMobile from '../../../../components/UI/Mobile/Sort/Header/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { IconRequests } from '../../../../components/UI/SvgIcons/icon-requests';
import { IconRequestsCalendar } from '../../../../components/UI/SvgIcons/icon-request-calendar';
import { IconDecline } from '../../../../components/UI/SvgIcons/icon-decline';
import { IconAuthtorize } from '../../../../components/UI/SvgIcons/icon-authorize';
import RowMobile from '../../../../components/UI/Mobile/Card/Row/index';
import { withoutDateStamp } from '../../../Requests/constants';
import { withShift } from '../../../Requests/NewRequest/constants';

const RequestDetails: React.FunctionComponent<Props & InjectedIntlProps> = ({ request, intl, backHandler, approveDecline }) => {

  const fieldCreator = (field: string, icon?: object) => {
    return request.hasOwnProperty(field) && 
      <RowMobile title={intl.formatMessage({ id: `requests.${field}` })}  value={request[field]} icon={icon} />
  }
  
  return (
    <RequestDetailsSection>
      <HeaderMobile
        title={intl.formatMessage({ id: `sortFields.request_details` })}
        backHandler={backHandler}
        actionHandler={() => approveDecline(false)}
        actiontitle={<IconDecline active={false}/>}
      />
      <RequestDetailsContainer>
        <RequestDetailsStyled>
          {fieldCreator('employee_number')}
          {fieldCreator('full_name')}
          {fieldCreator('type', <IconRequests />)}
          {!withoutDateStamp.includes(request.type) && fieldCreator('date_stamp', <IconRequestsCalendar />)}
          {fieldCreator('absence_policy', <IconRequestsCalendar />)}
          {fieldCreator('duration')}
          {withoutDateStamp.includes(request.type) && fieldCreator('date_stamp1', <IconRequestsCalendar />)}
          {fieldCreator('fill_in_user')}
          {fieldCreator('punch_status')}
          {withShift.includes(request.type) && fieldCreator('shift')}
          {request.type !== 'Vacation' && fieldCreator('shift2')}
          {fieldCreator('approvals_display')}
          {fieldCreator('ticket_id')}
          {fieldCreator('job_location')}
          {fieldCreator('reason_message')}
        </RequestDetailsStyled>
      </RequestDetailsContainer>
        <ButtonSection onClick={() => approveDecline(true)}>
          <ApplyBtn>
            <span>{intl.formatMessage({ id: `sortFields.approve`})}</span>
            <IconAuthtorize active={false} />
          </ApplyBtn>
        </ButtonSection>
    </RequestDetailsSection>
  );
};

export default injectIntl(RequestDetails);
