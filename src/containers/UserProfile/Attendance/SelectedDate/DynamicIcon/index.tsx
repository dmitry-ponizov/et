import React, { Component } from 'react'
import { Props } from './types';
import { IconE1, IconE4, IconEQ, IconM1, IconM2, IconS1, IconS2, IconS4, IconS5, IconSF, IconSQ } from '../../../../../components/UI/SvgIcons/Exceptions'
  
class DynamicIcon extends Component<Props> {
    components: {[index: string]: any} = {
        E1: IconE1,
        E4: IconE4,
        EQ: IconEQ,
        M1: IconM1,
        M2: IconM2,
        S1: IconS1,
        S2: IconS2,
        S4: IconS4,
        S5: IconS5,
        SF: IconSF,
        SQ: IconSQ,
        // M6:IconM2
        
    };

    render() {
       const TagName = !!this.components[this.props.tag] ? this.components[this.props.tag] : IconM2
       return <TagName />
    }
}

export default DynamicIcon;