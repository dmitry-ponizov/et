import React, { Component } from 'react'
import { Props } from './types';
import BirthCard from '../BirthCard';
import MemberCard from '../MemberCard';


class DynamicCard extends Component<Props> {
    components: {[index: string]: any} = {
        birthdays: BirthCard,
        newMembers: MemberCard,
    };

    render() {
       const TagName = this.components[this.props.tag || 'birthdays'];
       const { user, sessionId, rtl, lang, lastId} = this.props;
       return <TagName  user={user} sessionId={sessionId} rtl={rtl} lang={lang} lastId={lastId} />
    }
}

export default DynamicCard;