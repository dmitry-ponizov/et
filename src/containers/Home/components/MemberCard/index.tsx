import * as React from 'react';
import { Props } from './types';
import { MemberCardStyled, FullArabicName, AvatarBlock, RightBlock, FullName, TodayStyled, DateStyled, NewEmployeeHeader, NewEmployeeLastHeader, Position } from './styled';
import { IconNewEmployee } from '../../../../components/UI/SvgIcons/icon-new-employee';
import Avatar from '../../../../components/UI/Avatar/index';
import moment from 'moment-timezone';
import { injectIntl, InjectedIntlProps } from 'react-intl';


const MemberCard: React.FunctionComponent<Props & InjectedIntlProps> = ({ user, sessionId, intl, rtl, lang, lastId }) => {
    const checkMemberCard = (hireDate: string) => {
        if (user.id === lastId) {
            return (<NewEmployeeLastHeader>
                        <IconNewEmployee color="#8edaff" />
                        <TodayStyled>{intl.formatMessage({ id: `home.welcome_new_employee`})}</TodayStyled>
                    </NewEmployeeLastHeader>)
        }
        return (<NewEmployeeHeader>
                    <IconNewEmployee color="#9191af"  />
                    <DateStyled>{moment(Number(hireDate) * 1000).locale(lang).format('MMM DD')} - {intl.formatMessage({ id: `home.welcome_new_employee`})}</DateStyled>
                </NewEmployeeHeader>)
    }

    return (
        <MemberCardStyled rtl={rtl}>
            <AvatarBlock>
                <Avatar userId={user.id} sessionId={sessionId}  />
            </AvatarBlock>
            <RightBlock>
                {checkMemberCard(user.hire_date)}
                <FullName>{user.full_name}</FullName>
                {<FullArabicName>{user.full_arabic_name ? `(${user.full_arabic_name})` : ' '}</FullArabicName>}
                <Position>{user.title}</Position>
            </RightBlock>
        </MemberCardStyled>
    );
};

export default injectIntl(MemberCard);
