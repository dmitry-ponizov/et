import React, { useEffect } from 'react';
import { Props } from './types';
import { HeaderMobileStyled, Title } from './styled';
import { IconLogoWhite } from '../../SvgIcons/icon-logo-white';
import { connected } from './connect'
import { formDataRequestFormat } from '../../../../utils/index';
import { navigate } from '@reach/router';
import { mobileResulution } from '../../../../constants/common';
import ActionsPanel from '../../../Header/ActionsPanel';
import { PendingRequestsPath, PunchInOutPath } from '../../../../routes/constants';
import ActionsPanelMobile from '../../../../containers/UserProfile/Mobile/ActionsPanelMobile/index';
import ModalMessage from '../../ModalMessage/index';
import LoaderComponent from '../../Loader/index';
import { showPunchPermission } from '../../../Header/helpers';

const HeaderWithLogo: React.FunctionComponent<Props> = ({
  authUserId,
  title,
  bcg,
  currentUser,
  sessionId,
  getCurrentUserAction,
  successNewRequestValidation,
  resetValidateRequest,
  createRequesStatus,
  createRequestError,
  changeNewRequestStatus,
  stationId,
  getStationIdAction,
  createPunchStatus,
  createPunchError,
  changePunchStatusAction,
  createPunchLoading,
  createRequestLoading,
  permissions,
  getPermissionsAction
}) => {


  useEffect(() => {
    if (!Boolean(Object.keys(currentUser).length)) {
      const formData = formDataRequestFormat({}, sessionId);
      getCurrentUserAction(formData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(Object.keys(currentUser).length), getCurrentUserAction])

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

  const punchDisplay = showPunchPermission(permissions)

  const punchHandler = () => { navigate(PunchInOutPath) }
  const newRequestHandler = () => {
    if (window.innerWidth <= mobileResulution) {
      navigate(`/user/${authUserId}/new-request`)
    }
    if (successNewRequestValidation) {
      resetValidateRequest()
    }
  }
  const notificationHandler = () => { }


  const actionPanel =
    <ActionsPanel
      punchHandler={punchHandler}
      newRequestHandler={newRequestHandler}
      pendingRequestHandler={() => navigate(PendingRequestsPath)}
      notificationHandler={notificationHandler}
      isMobile={false}
      showPunch={punchDisplay}
      isLoading={Boolean(permissions)}
    />
  const actionsPanelMobile =
    <ActionsPanelMobile
      icons={actionPanel}
    />
  const acceptHandler = () => {
    changeNewRequestStatus(false)
  }
  
  const punchAcceptHandler = () => {changePunchStatusAction()}
  return (
    <HeaderMobileStyled bcg={bcg}>
      <ModalMessage acceptHandler={acceptHandler} success={createRequesStatus} error={createRequestError} successMessage={'Request was sent successfully!'}  errorMessage={'Request wasn`t sent '}/>
      <ModalMessage acceptHandler={punchAcceptHandler} success={createPunchStatus} error={createPunchError} successMessage={'Punch created successfully!'} errorMessage={'Punch was not created'} />
      <IconLogoWhite />
      <Title>{title}</Title>
      {actionsPanelMobile}
      {createRequestLoading || createPunchLoading ? <LoaderComponent margin="300px" /> : ''}
    </HeaderMobileStyled>
  );
};

export default connected(HeaderWithLogo);
