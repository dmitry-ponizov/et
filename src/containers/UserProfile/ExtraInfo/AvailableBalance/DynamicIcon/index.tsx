import React, { Component } from 'react'
import { Props } from './types';
import { IconHourlyLeave } from '../../../../../components/UI/SvgIcons/AvailableBalance/icon-hourly-leave';
import { IconAnnualLeave } from '../../../../../components/UI/SvgIcons/AvailableBalance/icon-annual-leave';
import { IconSickLeave } from '../../../../../components/UI/SvgIcons/AvailableBalance/icon-sick-leave';
import { IconFlexibleLeave } from '../../../../../components/UI/SvgIcons/AvailableBalance/icon-flexible-leave';

class DynamicIcon extends Component<Props> {
    components: {[index: string]: any} = {
        hourly_leave: IconHourlyLeave,
        annual_leave: IconAnnualLeave,
        annual_leave_2nd_shift: IconAnnualLeave,
        hourly_leave_2nd_shift: IconHourlyLeave,
        sick_leave: IconSickLeave,
        sick_leave_2nd_shift: IconSickLeave,
        flexible_leave_first_shift: IconFlexibleLeave,
        flexible_leave_second_shift: IconFlexibleLeave
    };


    render() {
       const TagName =  !!this.components[this.props.tag] ? this.components[this.props.tag] : IconHourlyLeave 
       return <TagName  />
    }
}

export default DynamicIcon;