import React, { useEffect, useState } from 'react';
import { HeaderStyled, MobileTitle, RigthPanel } from './styled';
import Panel from './Panel/index';
import { connected } from './connect';
import { formDataRequestFormat, shortTitle, isRtl } from '../../utils/index';
import BackButton from '../UI/BackButton/index';
import NewRequest from '../../containers/Requests/NewRequest';
import ActionsPanel from './ActionsPanel';
import { PendingRequestsPath, PunchInOutPath } from '../../routes/constants';
import { navigate } from '@reach/router';
import { Props } from './types'
import ModalMessage from '../UI/ModalMessage/index';
import LoaderComponent from '../UI/Loader/index';
import ActionsPanelMobile from '../../containers/UserProfile/Mobile/ActionsPanelMobile/index';
import { mobileResulution } from '../../constants/common';
import { windowParams } from '../../containers/Requests/NewRequest/constants';
import UserHeader from './User/index';
import PunchInOut from '../../containers/PunchInOut/index';
import { showPunchPermission } from './helpers';

const Header: React.FC<Props> = ({
  isMobile,
  currentUser,
  sessionId,
  mobileTitle,
  currentPage,
  getCurrentUserAction,
  successNewRequestValidation,
  setNewRequestAction,
  changeNewRequestStatus,
  createRequesStatus,
  createRequestError,
  createRequestLoading,
  authUserId,
  resetValidateRequest,
  setUserIdAction,
  avatar,
  stationId,
  getStationIdAction,
  createPunchStatus,
  createPunchLoading,
  createPunchError,
  changePunchStatusAction,
  lang,
  getPermissionsAction,
  permissions,
  currentUserError
}) => {


  const [newRequestShow, newRequestToggle] = useState(false)
  const [punchShow, setPunchShow] = useState(false)

  const punchDisplay = showPunchPermission(permissions)

  useEffect(() => {
    if (!Boolean(Object.keys(currentUser).length)) {
      const formData = formDataRequestFormat({}, sessionId);
      getCurrentUserAction(formData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!stationId) {
      getStationIdAction()
    }
  }, [stationId, getStationIdAction])

  useEffect(() => {
    if(!permissions) {
      getPermissionsAction()
    }
  }, [permissions, getPermissionsAction])

  const punchHandler = () => {
    if (window.innerWidth <= mobileResulution) {
      navigate(PunchInOutPath)
    }
    setPunchShow(true)
  }

  const newRequestHandler = () => {
    if (window.innerWidth <= mobileResulution) {
      navigate(`/user/${authUserId}/new-request`)
    }
    // if (successNewRequestValidation) {
    resetValidateRequest()
    // }
    newRequestToggle(true)
    setUserIdAction(currentUser.id)
  }
  const notificationHandler = () => { }

  const acceptHandler = () => {
    changeNewRequestStatus(false)
  }
  const actionPanel =
    <ActionsPanel
      punchHandler={punchHandler}
      newRequestHandler={newRequestHandler}
      pendingRequestHandler={() => navigate(PendingRequestsPath)}
      notificationHandler={notificationHandler}
      isMobile={isMobile}
      showPunch={punchDisplay}
      isLoading={Boolean(permissions)}
    />
  const actionsPanelMobile =
    <ActionsPanelMobile
      icons={actionPanel}
    />
  const sendRequestHandler = () => {
    if (newRequestShow && successNewRequestValidation) {
      setNewRequestAction()
      newRequestToggle(false)
    }
  }

  const punchAcceptHandler = () => { changePunchStatusAction()}
  const rtl = isRtl(lang)


  if(currentUserError) {
    // navigate('/login')
  }

  // console.log(currentUser)
  return (
    <HeaderStyled isMobile={isMobile}>
      <ModalMessage acceptHandler={acceptHandler} success={createRequesStatus} error={createRequestError} successMessage={'Request was sent successfully!'} errorMessage={'Request wasn`t sent '} />
      <ModalMessage acceptHandler={punchAcceptHandler} success={createPunchStatus} error={createPunchError} successMessage={'Punch created successfully!'} errorMessage={'Punch was not created'} />
      <BackButton />
      {isMobile && <MobileTitle>{shortTitle(mobileTitle, 20)}</MobileTitle>}
      <RigthPanel>
        {!isMobile ? <Panel icons={actionPanel} /> : actionsPanelMobile}
        <UserHeader sessionId={sessionId} user={currentUser} avatar={avatar} rtl={rtl}/>
      </RigthPanel>
      {newRequestShow &&
        <NewRequest
          user={currentUser}
          isMobile={isMobile}
          cancelHandler={() => newRequestToggle(false)}
          sendRequest={sendRequestHandler}
          windowParams={windowParams}
          path={currentPage} />}
      {punchShow &&
        <PunchInOut punchCancel={() => setPunchShow(false)} />
      }
      {createRequestLoading || createPunchLoading ? <LoaderComponent margin="300px" /> : ''}
    </HeaderStyled>
  );
}

export default connected(Header);