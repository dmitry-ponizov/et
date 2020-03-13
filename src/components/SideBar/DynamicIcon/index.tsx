import React from 'react'
import { Props } from './types';
import { IconHome } from '../../UI/SvgIcons/Sidebar/icon-home'
import { IconCompany } from '../../UI/SvgIcons/Sidebar/icon-company'
import { IconTeam } from '../../UI/SvgIcons/Sidebar/icon-team'
import { IconMe } from '../../UI/SvgIcons/Sidebar/icon-me'
import { IconSettings } from '../../UI/SvgIcons/Sidebar/icon-settings'
import { IconHelp } from '../../UI/SvgIcons/Sidebar/icon-help'
import { IconLogout } from '../../UI/SvgIcons/Sidebar/icon-logout'

const DynamicIcon: React.FC<Props> = ({ tag, active }) => {
    const components: { [index: string]: any } = {
        home: IconHome,
        company: IconCompany,
        team: IconTeam,
        me: IconMe,
        settings: IconSettings,
        help: IconHelp,
        logout: IconLogout
    };
    const TagName = components[tag || 'home'];
    return <TagName active={active} />
}

export default DynamicIcon;