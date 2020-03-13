import React, {  useEffect, useCallback } from 'react'
import {ContactsWrap, GeneralInfoContainer, Content, InfoBlock, FullName, Position, ContactsBlock, LeftBlock, RightBlock, ButtonsContainer, PagesLinksBlock, AvatarWrap, FullArabicName } from './styled';
import { PageLinks, getUserDataRequest } from '../../../constants';
import { Props } from './types';
import { IconEmail } from '../../../../../components/UI/SvgIcons/icon-email';
import ContactMobile from './Contact/index';
import { VerticalLineStyled } from '../../../Generalnfo/styled';
import { IconPhone } from '../../../../../components/UI/SvgIcons/icon-phone';
import { IconAvailable } from '../../../../../components/UI/SvgIcons/icon-available';
import { IconMakeRequestAsUser } from '../../../../../components/UI/SvgIcons/icon-make-request-as-user';
import RequestButton from './RequestButton/index';
import { IconUserRequests } from '../../../../../components/UI/SvgIcons/icon-user-requests';
import PageButton from './PageButton/index';
import { IconRightArrow } from '../../../../../components/UI/SvgIcons/icon-right-arrow';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import NavigationPanelMobile from '../../../../../components/UI/Mobile/NavigationPanel/index';
import { navigate } from '@reach/router';
import { shortTitle, isObject, formDataRequestFormat } from '../../../../../utils/index';
import { connected } from './connect'
import Avatar from '../../../../../components/UI/Avatar/index';

const GeneralInfoMobile: React.FC<Props & InjectedIntlProps> = ({
    user,
    sessionId,
    intl,
    userId,
    getUserDataAction
}) => {

  
    const getUserData = useCallback(() => {
        let userRequest: any[] = [...getUserDataRequest];
        userRequest[0]['filter_data']['id'] = userId
        const formData = formDataRequestFormat(userRequest, sessionId);
        if (user.id !== userId) {
            getUserDataAction(formData);
        }
    }, [getUserDataAction, userId, user.id, sessionId])

    useEffect(() => {
        getUserData()
    }, [getUserData])


    const checkStatus = () => {
        return user.is_available_today ? 'Active' : 'Disabled'
    }

    const makeRequestAsUserHandler = () => {
        navigate(`/user/${userId}/new-request`)
    }

    const pendingRequestsHandler = () => {
        navigate(`/user/${userId}/pending-requests`)
    }

    return (
        <>
            {isObject(user) &&
                <GeneralInfoContainer>
                    <Content>
                    <AvatarWrap>
                        <Avatar userId={user.id} sessionId={sessionId}  />
                    </AvatarWrap>
                        <InfoBlock>
                            <FullName>{user.full_name}</FullName>
                            {user.full_arabic_name.trim() && <FullArabicName>{`(${user.full_arabic_name})`}</FullArabicName>}
                            <Position>{user.title}</Position>
                        </InfoBlock>
                        <ContactsWrap>
                            <ContactsBlock>
                                <LeftBlock>
                                    <ContactMobile icon={<IconEmail />} value={shortTitle(user.work_email, 26)} description={intl.formatMessage({ id: `global.email` })} />
                                    <ContactMobile icon={<IconPhone />} value={user.work_phone} description={intl.formatMessage({ id: `global.work_phone` })} />
                                </LeftBlock>
                                <VerticalLineStyled />
                                <RightBlock>
                                    <ContactMobile icon={<IconAvailable />} value={checkStatus()} description={intl.formatMessage({ id: `global.available_today` })} />
                                    <ContactMobile icon={<IconPhone />} value={user.mobile_phone} description={intl.formatMessage({ id: `global.mobile_number` })} />
                                </RightBlock>
                            </ContactsBlock>
                        </ContactsWrap>
                        <ButtonsContainer>
                            <RequestButton clickHandler={makeRequestAsUserHandler} icon={<IconMakeRequestAsUser />} title={intl.formatMessage({ id: `global.make_request_as_user` })} />
                            <RequestButton clickHandler={pendingRequestsHandler} icon={<IconUserRequests />} title={intl.formatMessage({ id: `global.pending_requests` })} />
                        </ButtonsContainer>
                        <PagesLinksBlock>
                            {PageLinks.map((page: { name: string, route: string }) => (
                                <PageButton key={page.name} pageName={intl.formatMessage({ id: `global.${page.name}` })} path={`/user/${user.id}${page.route}`} icon={<IconRightArrow />} />
                            ))}
                        </PagesLinksBlock>
                    </Content>
                    <NavigationPanelMobile />
                </GeneralInfoContainer>}
        </>
    )
}

export default connected(injectIntl(GeneralInfoMobile));