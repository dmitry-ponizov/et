import React, { useState } from 'react';
import { Props } from './types'
import { PendingRequestsLists, PendingRequestsMobileStyled } from './styled';
import Request from './Request';
import HeaderMobile from '../../../components/UI/Mobile/Header/index';
import SortMobile from '../../../components/UI/Mobile/Sort/index';
import LoaderComponent from '../../../components/UI/Loader/index';
import RequestDetails from './RequestDetails/index';
import Modal from '../../../components/UI/Modal/index';
import ModalContent from '../../../components/UI/ModalContent';
import NoSearchResults from '../../../components/UI/Mobile/NoSearchResults/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { AscSort } from '../../../constants/common';
import { SortFieldsMobile } from '../constants';
import ErrorComponent from '../../../components/UI/Error/index';

const PendingRequestsMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
  requests,
  findHandler,
  isLoading,
  onCancel,
  approveDecline,
  selectRequestHandler,
  approved,
  declined,
  approveDeclineError,
  resetAutorizeAction,
  modalProps,
  sortHandler,
  intl,
  error
}) => {


  const [showSortScreen, setShowSortScreen] = useState(false)
  const [showDetailsScreen, setShowDetailsScreen] = useState(false)
  const [selectedRequest, setSelectedRequest] = useState({})
  const [direction, setDirection] = useState(AscSort)
  const [activeField, setActiveField] = useState('employee_number');
  const [query, setQuery] = useState('')

  const showSortHandler = () => {
    setShowSortScreen(!showSortScreen)
  }

  const selectRequest = (request: { [index: string]: any }) => {
    setShowDetailsScreen(true)
    setSelectedRequest(request)
    selectRequestHandler(request.id)
  }

  const approveDeclineHandler = (status: boolean) => {
    setShowDetailsScreen(false)
    approveDecline(status)
  }

  const sort = (direction: string, field: string) => {
    setShowSortScreen(false)
    sortHandler(direction, field)
  }

  const resetHandler = () => {
    setActiveField('employee_number')
    setDirection(AscSort)
  }

  const findQuery = (query: string) => {
    setQuery(query)
    findHandler(query)
  }
  
  const cancelHandler = () => {
    setQuery('')
    onCancel()
  }
  
  return (
    <PendingRequestsMobileStyled>
      <Modal show={approved || Boolean(approveDeclineError) || declined} modalClosed={() => { }} >
        <ModalContent
          accept={() => resetAutorizeAction()}
          icon={modalProps.icon}
          status={modalProps.status}
          message={modalProps.message}
        />
      </Modal>
      {!showSortScreen && !showDetailsScreen &&
        <>
          <HeaderMobile
            title={intl.formatMessage({ id: `global.pending_requests`})}
            sortHandler={showSortHandler}
            findHandler={findQuery}
            placeholder={intl.formatMessage({ id: `global.find_request`})}
            withSearch={true}
            onCancel={cancelHandler}
          />
          <PendingRequestsLists>
            {requests.map((request: { [index: string]: any }) =>
              <Request key={request.id} request={request} selectRequest={selectRequest} />)}
          </PendingRequestsLists>
        </>}

      {error && !isLoading && !query && <ErrorComponent error={error} />}
      {error && !isLoading && query && 
      <NoSearchResults query={query} />}
      {showSortScreen && !showDetailsScreen &&
        <SortMobile
          backHandler={showSortHandler}
          total={requests.length}
          sortHandler={sort}
          direction={direction}
          activeField={activeField}
          setDirection={setDirection}
          setActiveField={setActiveField}
          resetHandler={resetHandler}
          sortFields={SortFieldsMobile}
        />}
      {!showSortScreen && showDetailsScreen &&
        <RequestDetails
          request={selectedRequest}
          backHandler={() => setShowDetailsScreen(false)}
          approveDecline={approveDeclineHandler}
        />}
      {isLoading ? <LoaderComponent margin="200px" /> : ''}
    </PendingRequestsMobileStyled>
  );
};

export default injectIntl(PendingRequestsMobile);
