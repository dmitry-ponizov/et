import React from 'react'
import { ViewRequestStyled, Header, Title, Requests, RightBlock, RequestInfo, ViewRequestContainer, IconBlock } from './styled';
import { IconClose } from '../../../components/UI/SvgIcons/icon-close';
import Field from './Field';
import { Props } from './types';
import Label from '../../../components/UI/Label/index';
import ErrorComponent from '../../../components/UI/Error';
import LoaderComponent from '../../../components/UI/Loader';
import FilterDropDownTabled from '../../../components/UI/FilterDropdownTabled/index';
import { requestDropDownFields, withoutDateStamp } from '../../Requests/constants';
import { withShift } from '../../Requests/NewRequest/constants';
import { injectIntl } from 'react-intl';
import { isRtl } from '../../../utils/index';


const ViewRequest: React.FC<Props> = ({
    cancelHandler,
    request,
    requestLoading,
    requestError,
    selectRequest,
    requests,
    intl,
    lang
}) => {
    const getTranslate = (option: string) => {
        return intl.formatMessage({ id: `requests.${option}` })
    }
    const rtl = isRtl(lang)
    
    return (
        <>
        {/* <Backdrop transparent={false} clicked={cancelHandler} show={true} /> */}
        <ViewRequestContainer>
            {requestError ? <ErrorComponent error={requestError} /> : ''}
                <ViewRequestStyled>
                    {!requestError && request ? <div>
                        <Header>
                        <Title>{getTranslate('request')}</Title>
                            <RightBlock>
                                <Requests>
                                    <FilterDropDownTabled
                                        selectHandler={selectRequest}
                                        selectedId={request.id}
                                        selected={`${request.employee_number} | ${request.full_name}`}
                                        title={getTranslate('request')}
                                        data={requests}
                                        columns={requestDropDownFields}
                                        loading={false}
                                        height="650px"
                                        name="requests"
                                        left="-677px"
                                        rtl={rtl}
                                    />
                                </Requests>
                                <IconBlock onClick={cancelHandler}>
                                    <IconClose />
                                </IconBlock>
                            </RightBlock>
                        </Header>
                        <RequestInfo>
                            {request.hasOwnProperty('full_name') && <Field label={getTranslate('employee')} title={request.full_name} type="text" />}
                            {request.hasOwnProperty('status') && <Field label={getTranslate('status')} title={<Label type={request.status.toLowerCase()} />} type="text" />}
                            {request.hasOwnProperty('type') && <Field label={getTranslate('type')} title={request.type} type="text" />}
                            {request.hasOwnProperty('fill_in_user') && <Field label={getTranslate('fill_in_for_user')} title={request.fill_in_user} type="text" />}
                            {request.hasOwnProperty('absence_policy') && <Field label={getTranslate('absence_policy')} title={request.absence_policy} type="text" />}
                            {request.hasOwnProperty('date_stamp') && !withoutDateStamp.includes(request.type) && <Field label={getTranslate('date')} title={request.date_stamp} type="text" />}
                            {request.hasOwnProperty('duration') && <Field label={getTranslate('duration')} title={request.duration} type="text" />}
                            {request.hasOwnProperty('date_stamp1') && withoutDateStamp.includes(request.type)  && <Field label={getTranslate('date')} title={request.date_stamp1} type="text" />}
                            {request.hasOwnProperty('punch_status') && <Field label={getTranslate('punch_status')} title={request.punch_status} type="text" />}
                            {request.hasOwnProperty('shift') && withShift.includes(request.type)  && <Field label={getTranslate('shift')} title={request.shift} type="text" />}
                            {request.hasOwnProperty('shift2') && request.type !== 'Vacation' && <Field label={getTranslate('shift')} title={request.shift2} type="text" />}
                            {request.hasOwnProperty('approvals_display') && <Field label={getTranslate('approvals')} title={request.approvals_display} type="text" />}
                            {request.hasOwnProperty('ticket_id') && <Field label={getTranslate('ticket_id')} title={request.ticket_id} type="text" />}
                            {request.hasOwnProperty('job_location') && <Field label={getTranslate('job_location')} title={request.job_location} type="text" />}
                            <Field label={getTranslate('reason_message')}  title={request.message} type="textarea" />
                        </RequestInfo>
                    </div> : ''}
                </ViewRequestStyled>
            {(requestLoading && !requestError) ? <LoaderComponent /> : ''}
        </ViewRequestContainer>
        </>
    )
}
export default injectIntl(ViewRequest);