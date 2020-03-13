import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { Props } from './types';
import { connected } from '../../../Requests/connect'
import Request from './Request'
import { elementsAmount } from '../../../../constants/common';
import ShowMore from '../../../../components/UI/ShowMore';
import TotalMobile from '../../../../components/UI/Mobile/Total'
import { MePath } from '../../../../routes/constants';
import { navigate } from '@reach/router';
import HeaderMobile from '../../../../components/UI/Mobile/Sort/Header/index';
import { RequestList, MyPendingRequestsStyled } from './styled';
import LoaderComponent from '../../../../components/UI/Loader/index';
import ErrorComponent from '../../../../components/UI/Error/index';
import RequestDetails from './RequestDetails';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { formDataRequestFormat } from '../../../../utils/index';
import { requestData } from '../../../Requests/constants';
import { regExp } from '../../../UserProfile/constants';

const MyPendingRequests: React.FunctionComponent<Props & InjectedIntlProps> = ({
  data,
  fetchRequestsDataAction,
  isLoading,
  error,
  intl,
  authUserId,
  sessionId,
  cancelRequestsAction,
  cancelRequestLoading,
  cancelRequestError,
  cancelSuccess,
  resetCancelRequestAction,
  id
}) => {

  const [showElements, showElementsHandler] = useState(elementsAmount)
  const [showDetailsScreen, setShowDetailsScreen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState({})

  const getMyRequestsData = useCallback(() => {
    let getRequests: any[] = [...requestData];
    getRequests[0]['filter_data']['user_id'] = id
    const formData = formDataRequestFormat(getRequests, sessionId);
    fetchRequestsDataAction(formData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchRequestsDataAction])

  useEffect(() => {
    checkId()
    if (!data.length) {
      getMyRequestsData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMyRequestsData])


  const showMoreHandler = () => {
    showElementsHandler((prevShowElements) => prevShowElements + elementsAmount)
  }

  const backHandler = () => {
    navigate(MePath)
  }

  const selectRequest = (request: { [index: string]: any }) => {
    setShowDetailsScreen(true)
    setSelectedRequest(request)
  }
  const isShowMore = data && data.length > elementsAmount && showElements < data.length;

  const backHandlerRequestDetails = () => {
    setShowDetailsScreen(false)
  }
  const refreshData = () => {
    console.log(cancelSuccess)
    if (cancelSuccess) {
      backHandlerRequestDetails()
      getMyRequestsData()
    }
    resetCancelRequestAction()
  }

  const checkId = () => {
    if (id && regExp.test(id)) {
      return id;
    } else {
      window.history.go(-1)
    }
  }

  return (
    <MyPendingRequestsStyled>
      {!showDetailsScreen && <HeaderMobile title={intl.formatMessage({ id: `global.my_pending_requests` })} backHandler={backHandler} />}
      {!showDetailsScreen && Boolean(data.length) &&
        <Fragment>
          <TotalMobile showElements={showElements} total={data.length} content={intl.formatMessage({ id: `global.requests` })} />
          <RequestList>
            {data.slice(0, showElements).map((request: { [index: string]: any }) =>
              <Request key={request.id} request={request} selectRequest={selectRequest} />)}
            {isShowMore && <ShowMore clickHandler={showMoreHandler} />}
          </RequestList>
        </Fragment>}
      {showDetailsScreen &&
        <RequestDetails
          request={selectedRequest}
          backHandler={backHandlerRequestDetails}
          cancelRequestsAction={cancelRequestsAction}
          sessionId={sessionId}
          isLoading={cancelRequestLoading}
          error={cancelRequestError}
          cancelSuccess={cancelSuccess}
          refreshData={refreshData}
        />}
      {isLoading ? <LoaderComponent margin="200px" /> : ''}
      {error && !isLoading ? <ErrorComponent error={error} /> : ''}
    </MyPendingRequestsStyled>);
};


export default connected(injectIntl(MyPendingRequests));
