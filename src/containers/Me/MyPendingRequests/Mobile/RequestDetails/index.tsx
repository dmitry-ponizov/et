import * as React from 'react';
import { Props } from './types'
import { RequestDetailsStyled, RequestDetailsContainer, RequestDetailsSection, ButtonSection, ApplyBtn } from './styled';
import HeaderMobile from '../../../../../components/UI/Mobile/Sort/Header/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { IconRequests } from '../../../../../components/UI/SvgIcons/icon-requests';
import { IconRequestsCalendar } from '../../../../../components/UI/SvgIcons/icon-request-calendar';
import RowMobile from '../../../../../components/UI/Mobile/Card/Row/index';
import { withoutDateStamp, cancelRequest } from '../../../../Requests/constants';
import { withShift } from '../../../../Requests/NewRequest/constants';
import { formDataRequestFormat } from '../../../../../utils/index';
import ModalContent from '../../../../../components/UI/ModalContent/index';
import { IconError } from '../../../../../components/UI/SvgIcons/icon-error';
import { IconApproveModal } from '../../../../../components/UI/SvgIcons/icon-approve-modal';
import Modal from '../../../../../components/UI/Modal/index';
import LoaderComponent from '../../../../../components/UI/Loader/index';


const RequestDetails: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
  request, 
  intl, 
  backHandler, 
  cancelRequestsAction, 
  sessionId, 
  isLoading, 
  error, 
  cancelSuccess,
  refreshData
}) => {
  const fieldCreator = (field: string, icon?: object) => {
    return request.hasOwnProperty(field) && 
      <RowMobile title={intl.formatMessage({ id: `requests.${field}` })}  value={request[field]} icon={icon} />
  }
  

  const cancelRequestHandler = () => {
    let templateCancelRequest = cancelRequest;
    templateCancelRequest[0][0]['request_id'] = request.id;
    const formData = formDataRequestFormat(templateCancelRequest, sessionId);
    cancelRequestsAction(formData)
  }
  let modalProps: { [index: string]: any } = {}
        if (cancelSuccess) {
            modalProps.icon = <IconApproveModal />
            modalProps.status = 'Canceled!'
            modalProps.message = 'Request canceled successfully!'

        } else if (error) {
            modalProps.icon = <IconError />
            modalProps.status = intl.formatMessage({ id: `requests.failed`})
            modalProps.message = error
        }
  

  return (
    <RequestDetailsSection>
       <HeaderMobile title={intl.formatMessage({ id: `sortFields.request_details` })} backHandler={backHandler} />
       <Modal show={cancelSuccess || Boolean(error)} modalClosed={() => { }} >
          <ModalContent
            accept={refreshData}
            icon={modalProps.icon}
            status={modalProps.status}
            message={modalProps.message}
          />
      </Modal>

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
      <ButtonSection onClick={cancelRequestHandler}>
          <ApplyBtn>
            <span>{intl.formatMessage({ id: `global.cancel_request`})}</span>
          </ApplyBtn>
        </ButtonSection>
        {isLoading ? <LoaderComponent margin="200px" /> : ''}
    </RequestDetailsSection>
  );
};

export default injectIntl(RequestDetails);
