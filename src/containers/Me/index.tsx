import React, { useEffect, useState } from 'react';
import { Props } from './types';
import { connected } from './connect';
import { useWindowSize } from '../../hooks/index';
import { isMobile, formDataRequestFormat, isObject, isRtl, firstDayForMonth, formatMonthTitle } from '../../utils/index';
import MeMobile from './Mobile/index';
import { MeStyled, GeneralInfoStyled } from './styled';
import LoaderComponent from '../../components/UI/Loader/index';
import ErrorComponent from '../../components/UI/Error/index';
import AccountPhoto from './AccountPhoto';
import { ContentBlock } from '../../styledTheme/globalStyles';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import { TeamCrumbs } from '../Team/constants';
import BasicInfo from './BasicInfo/index';
import Attendance from '../UserProfile/Attendance';
import MyPendingRequests from './MyPendingRequests';
import ModalMessage from '../../components/UI/ModalMessage/index';
import { requestData } from '../Requests/constants';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import ExtraInfo from '../UserProfile/ExtraInfo';
import { GetAccrualBalanceRequest } from '../UserProfile/constants';
import ProcessedData from '../UserProfile/ProcessedData';
import { getUserDataRequest } from '../UserProfile/constants';

const Me: React.FunctionComponent<Props & InjectedIntlProps> = ({
  authUserId,
  sessionId,
  getMeDataAction,
  user,
  setCurrentPageAction,
  path,
  isLoading,
  error,
  avatar,
  userIdAttendance,
  changeUserIdAttendanceAction,
  getTimeSheetForMonthAction,
  fetchRequestsDataAction,
  requests,
  changeAvatarAction,
  setAvatarAction,
  editUserResetAction,
  editUserInfo,
  errorEditUser,
  editUserAction,
  loading,
  requestsLoading,
  requestsError,
  intl,
  lang,
  getAvailableBalanceAction,
  availableBalance,
  isLoadingAvailableBalance,
  errorAvailableBalance,
  getProcessedDataAction,
  processedData,
  loadingProcessedData,
  isLoadingCurrentUser
}) => {
  const [fromDate, setFromDate] = useState(firstDayForMonth())
  const [toDate, setToDate] = useState(formatMonthTitle(new Date()))

  const size = useWindowSize();
  const mobile = isMobile(size)

  const getBalance = () => {
    let requestData = GetAccrualBalanceRequest;
    requestData[0]['filter_data']['user_id'] = authUserId;
    const formData = formDataRequestFormat(requestData, sessionId);
    getAvailableBalanceAction(formData)
  }

  useEffect(() => {
    let userRequest: any[] = [...getUserDataRequest];
    userRequest[0]['filter_data']['id'] = authUserId
    const formData = formDataRequestFormat(userRequest, sessionId);
    if (authUserId && authUserId !== user.id) {
      getMeDataAction(formData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUserId, getMeDataAction])

  useEffect(() => {
    setCurrentPageAction(path)
  }, [path, setCurrentPageAction])

  useEffect(() => {
    if (authUserId && authUserId !== userIdAttendance && !mobile) {
      getTimeSheetForMonthAction(authUserId)
      changeUserIdAttendanceAction(authUserId)
    }
  }, [authUserId, getTimeSheetForMonthAction, changeUserIdAttendanceAction, userIdAttendance, mobile])

  useEffect(() => {
    if (!requests.length) {
      let getRequests: any[] = [...requestData];
      getRequests[0]['filter_data']['user_id'] = authUserId
      const formData = formDataRequestFormat(getRequests, sessionId);
      if (authUserId) {
        fetchRequestsDataAction(formData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUserId])

  useEffect(() => {
    if (authUserId && !mobile) {
      getBalance()
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUserId])
  
  useEffect(() => {
    if (authUserId && !mobile) {
      getProcessedDataAction({ from: fromDate, to: toDate, userId: authUserId, sessionId: sessionId })
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUserId])

  const acceptHandler = () => {
    editUserResetAction()
  }

  const changeDateFromHandler = (date: any) => {
    setFromDate(date);
    getProcessedDataAction({ from: date, to: toDate, userId: user.id, sessionId })
  }

  const changeDateToHandler = (date: any) => {
    setToDate(date)
    getProcessedDataAction({ from: fromDate, to: date, userId: user.id, sessionId })
}

  const rtl = isRtl(lang)
  return (
    <>
      {!error &&
        <MeStyled>
          {!mobile ?
            <div>
              <ModalMessage acceptHandler={acceptHandler} success={editUserInfo} error={errorEditUser} successMessage={'Profile has been successfully edited!'} errorMessage={errorEditUser} />
              <Header isMobile={false} />
              {isObject(user) &&
                <ContentBlock>
                  <Breadcrumbs crumbs={TeamCrumbs} lastCrumb={intl.formatMessage({ id: `global.me` })} />
                  <GeneralInfoStyled>
                    <AccountPhoto
                      user={user}
                      sessionId={sessionId}
                      changeAvatarAction={changeAvatarAction}
                      avatarHandler={setAvatarAction}
                      avatar={avatar}
                      rtl={rtl}
                    />
                    <BasicInfo
                      user={user}
                      editUser={editUserAction}
                    />
                  </GeneralInfoStyled>
                  <ExtraInfo
                    user={user}
                    getAvailableBalance={getAvailableBalanceAction}
                    sessionId={sessionId}
                    availableBalance={availableBalance}
                    isLoading={isLoadingAvailableBalance}
                    error={errorAvailableBalance}
                  />
                  <Attendance />
                  <ProcessedData
                    changeDateFrom={changeDateFromHandler}
                    changeDateTo={changeDateToHandler}
                    fromDate={fromDate}
                    toDate={toDate}
                    sessionId={sessionId}
                    processedData={processedData}
                    loading={loadingProcessedData}
                    lang={lang}
                  />
                  <MyPendingRequests requests={requests} isLoading={requestsLoading} error={requestsError} />
                </ContentBlock>}
            </div> :
            <MeMobile
              user={user}
              sessionId={sessionId}
              avatar={avatar}
              changeAvatarAction={changeAvatarAction}
              setAvatarAction={setAvatarAction}
              rtl={rtl}
            />}
          {isLoading || loading || isLoadingCurrentUser ? <LoaderComponent margin="200px" /> : ''}
        </MeStyled>}
      {error && !isLoading && <ErrorComponent error={error} />}
    </>
  );
};

export default connected(injectIntl(Me));