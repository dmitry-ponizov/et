import * as React from 'react';
import { Props } from './types';
import { BirthCardStyled, FullArabicName, AvatarBlock, RightBlock, FullName, TodayStyled, BirthHeader, DateStyled } from './styled';
import { IconRedCake } from '../../../../components/UI/SvgIcons/icon-red-cake';
import Avatar from '../../../../components/UI/Avatar/index';
import moment from 'moment-timezone';
import { IconGreyCake } from '../../../../components/UI/SvgIcons/icon-grey-cake';
import { injectIntl, InjectedIntlProps } from 'react-intl';



const BirthCard: React.FunctionComponent<Props & InjectedIntlProps> = ({ user, sessionId, intl, rtl, lang }) => {

    const checkBirthDate = (birthDate: string) => {
        const today = new Date().getDate()
        const bithDay = new Date(Number(birthDate) * 1000).getDate()
        if (today === bithDay) {
            return (<>
                        <IconRedCake />
                        <TodayStyled>{intl.formatMessage({ id: `home.today_is`})}</TodayStyled>
                    </>)
        }
        return (<>
                    <IconGreyCake />
                    <DateStyled>{moment(Number(birthDate) * 1000).locale(lang).format('MMM DD')}</DateStyled>
                </>)
    }

    return (
        <BirthCardStyled rtl={rtl}>
            <AvatarBlock>
                <Avatar userId={user.id} sessionId={sessionId} />
            </AvatarBlock>
            <RightBlock>
                <BirthHeader>
                    {checkBirthDate(user.birth_date)}
                </BirthHeader>
                <FullName>{user.full_name}</FullName>
                {<FullArabicName>{user.full_arabic_name ? `(${user.full_arabic_name})` : ' '}</FullArabicName>}
            </RightBlock>
        </BirthCardStyled>
    );
};

export default injectIntl(BirthCard);
