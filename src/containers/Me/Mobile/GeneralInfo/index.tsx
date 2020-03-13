import React from 'react';
import { GeneralInfoContainer, Content, ContactsBlock, RightBlock, ContactsSection, PagesLinksBlock } from './styled';
import { Props } from './types';
import { isObject, shortTitle } from '../../../../utils/index';
import { IconEmail } from '../../../../components/UI/SvgIcons/icon-email';
import { IconPhone } from '../../../../components/UI/SvgIcons/icon-phone';
import { IconAvailable } from '../../../../components/UI/SvgIcons/icon-available';
import { VerticalLineStyled } from '../../../UserProfile/Generalnfo/styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import ContactMobile from '../../../UserProfile/Mobile/Screens/Generalnfo/Contact'
import { PageLinks } from '../../constants';
import PageButton from '../../../UserProfile/Mobile/Screens/Generalnfo/PageButton/index';
import { IconRightArrow } from '../../../../components/UI/SvgIcons/icon-right-arrow';
import { IconLogout } from '../../../../components/UI/SvgIcons/icon-logout';
import AccountPhoto from '../AccountPhoto';


const MeGeneralInfoMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({ 
    user, 
    sessionId, 
    intl, 
    avatar,
    changeAvatarAction,
    setAvatarAction,
    rtl
}) => {
    
    const checkStatus = () => {
        return user.is_available_today ? 'Active' : 'Disabled'
    }

    const checkIcon = (routeName: string) => {
        return routeName === 'logout' ? <IconLogout /> : <IconRightArrow /> 
    }
    
    const checkRoute = (routePath: string) => {
        if(routePath === '/attendance') {
            return `/user/${user.id}/attendance`
        } else if(routePath === '/my-pending-requests') {
            return `/my-pending-requests/${user.id}`
        } else if(routePath === '/extra-information' || routePath === '/attendance-kpis') {
            return `/user/${user.id}${routePath}`
        }
        return routePath 
    }
    
    return (
        <GeneralInfoContainer>
            {isObject(user) &&
                <>
                    <Content>
                        <AccountPhoto rtl={rtl} user={user} sessionId={sessionId} changeAvatarAction={changeAvatarAction} avatar={avatar} avatarHandler={setAvatarAction}/>
                    </Content>
                    <ContactsSection>
                        <ContactsBlock>
                            <div>
                                <ContactMobile icon={<IconEmail />} value={shortTitle(user.work_email, 26)} description={intl.formatMessage({ id: `global.email` })} />
                                <ContactMobile icon={<IconPhone />} value={user.work_phone} description={intl.formatMessage({ id: `global.work_phone` })} />
                            </div>
                            <VerticalLineStyled />
                            <RightBlock>
                                <ContactMobile icon={<IconAvailable />} value={checkStatus()} description={intl.formatMessage({ id: `global.available_today` })} />
                                <ContactMobile icon={<IconPhone />} value={user.mobile_phone} description={intl.formatMessage({ id: `global.mobile_number` })} />
                            </RightBlock>
                        </ContactsBlock>
                    </ContactsSection>
                    <PagesLinksBlock>
                        {PageLinks.map((page: { name: string, route: string }) => (
                            <PageButton key={page.name} pageName={intl.formatMessage({ id: `global.${page.name}` })} path={checkRoute(page.route)} icon={checkIcon(page.name)} />
                        ))}
                    </PagesLinksBlock>
                </>
            }
        </GeneralInfoContainer>)
};

export default injectIntl(MeGeneralInfoMobile);
