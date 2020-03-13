import React, {useState} from 'react'
import { Props } from './types';
import DropDownMobile from '../../../../components/UI/Mobile/DropDownMobile/index';
import { ActionsPanelStyled, NotificationsStyled } from './styled';
import { IconNotificationsMobile } from '../../../../components/UI/SvgIcons/icon-notification-mobile';

const ActionsPanelMobile: React.FC<Props> = ({ icons}) => {
    const [active, activeHandler] = useState(false);
  
    return (
        <ActionsPanelStyled >
            <NotificationsStyled onClick={() => activeHandler(!active)}>
                <IconNotificationsMobile />
            </NotificationsStyled>
            <DropDownMobile icons={icons} />
        </ActionsPanelStyled>
    )
}
export default ActionsPanelMobile;