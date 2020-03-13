import React from 'react'
import { ActionPanelStyled } from './styled';
import HeaderButton from '../../UI/HeaderButton/index';
import { Props } from './types';
import { IconPunchInOut } from '../../UI/SvgIcons/icon-punch-in-out';
import { IconNewRequest } from '../../UI/SvgIcons/icon-new-request';
import { IconPendingRequest } from '../../UI/SvgIcons/icon-pending-request';
import { IconNotifications } from '../../UI/SvgIcons/icon-notifications';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { useWindowSize } from '../../../hooks/index';
import { mobileResulution } from '../../../constants/common';

const ActionsPanel: React.FC<Props & InjectedIntlProps> = ({ 
    punchHandler, 
    newRequestHandler, 
    pendingRequestHandler, 
    notificationHandler, 
    intl, 
    showPunch,
    isLoading
}) => {
    const size = useWindowSize();
    const isMobile = size.width && size.width <= mobileResulution ? true : false;
    return (
        <ActionPanelStyled>
            {showPunch && isLoading && 
                <HeaderButton
                    title={intl.formatMessage({ id: `global.punch_in_out`})}
                    icon={<IconPunchInOut active={isMobile} />}
                    clickHandler={punchHandler}
                    isMobile={isMobile}
                />}
            <HeaderButton
                title={intl.formatMessage({ id: `global.new_request`})}
                icon={<IconNewRequest active={isMobile}  />}
                clickHandler={newRequestHandler}
                isMobile={isMobile}
            />
            <HeaderButton
                title={intl.formatMessage({ id: `global.pending_requests`})}
                icon={<IconPendingRequest active={isMobile}  />}
                clickHandler={pendingRequestHandler}
                isMobile={isMobile}
            />

            {size.width && size.width >= mobileResulution && <HeaderButton
                title={intl.formatMessage({ id: `global.notifications`})}
                icon={<IconNotifications />}
                clickHandler={notificationHandler}
                isMobile={isMobile}
            />}
        </ActionPanelStyled>
    )
}
export default injectIntl(ActionsPanel);