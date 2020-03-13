import React from 'react';
import { Props } from './types';
import HeaderWithLogo from '../../../components/UI/Mobile/HeaderWithLogo/index';
import MeGeneralInfoMobile from './GeneralInfo/index';
import { MeMobileWrapper } from './styled';
import NavigationPanelMobile from '../../../components/UI/Mobile/NavigationPanel/index';
import { isObject } from '../../../utils/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';


const MeMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
  user, 
  sessionId,
  avatar,
  intl,
  changeAvatarAction,
  setAvatarAction,
  rtl
}) => {

  return (
    <MeMobileWrapper>
      <HeaderWithLogo title={intl.formatMessage({ id: `global.me`})} bcg="#08A5F0" />
      <MeGeneralInfoMobile 
        changeAvatarAction={changeAvatarAction}
        user={user} 
        sessionId={sessionId} 
        avatar={avatar}
        setAvatarAction={setAvatarAction}
        rtl={rtl}
      />
      {isObject(user) && <NavigationPanelMobile /> }
    </MeMobileWrapper>
  );
};

export default injectIntl(MeMobile);
