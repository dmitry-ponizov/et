import React, { Component } from 'react';
import { HeaderStyled, MobileTitle, RigthPanel } from './styled';
import { Props } from './types';
import { connected } from './connect';
import Panel from '../../../components/Header/Panel/index';
import { formDataRequestFormat, shortTitle, isRtl } from '../../../utils/index';
import BackButton from '../../../components/UI/BackButton';
import UserHeader from '../../../components/Header/User/index';


class PendingRequestHeader extends Component<Props> {
  componentDidMount() {
    if(!Boolean(Object.keys(this.props.currentUser).length)) {
      this.getCurrentUser()
    }
  }

  private getCurrentUser = () => {
    const formData = formDataRequestFormat({}, this.props.sessionId);
    this.props.getCurrentUserAction(formData)
  }

  
  public render () {
    const { icons, isMobile, actionsPanelMobile, mobileTitle, sessionId, currentUser, lang } = this.props;
    const rtl = isRtl(lang)
    return (
      <HeaderStyled>
          <BackButton />
          {isMobile && <MobileTitle>{shortTitle(mobileTitle,20)}</MobileTitle> }
          <RigthPanel>
            {!isMobile ? <Panel icons={icons} /> : actionsPanelMobile}
            <UserHeader sessionId={sessionId} user={currentUser} rtl={rtl}/>
          </RigthPanel>
      </HeaderStyled>
    );
  }
}

export default connected(PendingRequestHeader);