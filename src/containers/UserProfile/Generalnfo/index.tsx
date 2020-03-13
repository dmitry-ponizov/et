import React from 'react';
import { 
    GeneralInfoContainer, 
    MainBlock,
    InfoBlock,
    FullName,
    Position,
    ContactsBlock,
    VerticalLineStyled,
    RequestButtons,
    AvatarWrap,
    FullArabicName
} from './styled';
import { Props } from './types';
import MakeRequestBtn from './MakeRequestButton';
import Contact from './Contact/index';
import Label from '../../../components/UI/Label';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Avatar from '../../../components/UI/Avatar/index';

const GeneralInfo: React.FC<Props & InjectedIntlProps> = ({ 
    user, 
    makeNewRequestHandler, 
    sessionId, 
    goToUserRequests, 
    intl,
    rtl
}) => {
    
    const checkLabel = () => {
        if(user.is_available_today) {
            return  <Label type="active" /> 
        }
        return <Label type="disabled" />
    }
    
    return (
        <GeneralInfoContainer>
            <AvatarWrap>
                <Avatar userId={user.id} sessionId={sessionId}  />
            </AvatarWrap>
            <MainBlock>
                <InfoBlock>
                    <div>
                        <FullName>{user.full_name} </FullName>
                        {user.full_arabic_name.trim() && <FullArabicName>{`(${user.full_arabic_name})`}</FullArabicName>}
                        <Position>{user.title} </Position>
                    </div>
                    <RequestButtons>
                        <MakeRequestBtn rtl={rtl} filled={false} title={intl.formatMessage({ id: `global.user_requests`})} clickHandler={goToUserRequests} />
                        <MakeRequestBtn rtl={rtl} filled={true} title={intl.formatMessage({ id: `global.make_request_as_user`})} clickHandler={makeNewRequestHandler} />
                    </RequestButtons>
                </InfoBlock>
                <ContactsBlock>
                    <Contact label={intl.formatMessage({ id: `global.email`})} info={user.work_email} type="email" />
                    <VerticalLineStyled />
                    <Contact label={intl.formatMessage({ id: `global.work_phone`})} info={user.work_phone}  type="phone" />
                    <VerticalLineStyled />
                    <Contact label={intl.formatMessage({ id: `global.available_today`})} info={checkLabel()} type="phone" />
                    <VerticalLineStyled />
                    <Contact label={intl.formatMessage({ id: `global.mobile_number`})} info={user.mobile_phone} type="phone" />
                </ContactsBlock>
            </MainBlock>
        </GeneralInfoContainer>
    )
}
export default injectIntl(GeneralInfo);