import React, { Component } from 'react'
import { Props } from './types';
import { IconHome } from '../../../SvgIcons/icon-home';
import { IconCompany } from '../../../SvgIcons/icon-company';
import { IconTeam } from '../../../SvgIcons/icon-team';
import { IconMe } from '../../../SvgIcons/icon-me';


class DynamicIcon extends Component<Props> {
    components: {[index: string]: any} = {
        home: IconHome,
        team: IconTeam,
        company: IconCompany,
        me: IconMe,
    };

    render() {
       const TagName = this.components[this.props.tag || 'home'];
       return <TagName  active={this.props.active} />
    }
}

export default DynamicIcon;