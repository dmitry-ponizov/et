import React, { useState } from 'react';
import { Props} from './types';
import { InfoBlock, Position, AccountPhotoStyled, AccountPhotoSection, FullName, AvatarWrap, AvatarBlock, AvatarImage, Point, NoAvatarStyled } from './styled';
import { NoAvatarIcon } from '../../../../constants/images';
import { GetAvatarUrl } from '../../../UserProfile/constants';
import { IconPencil } from '../../../../components/UI/SvgIcons/icon-pencil';
import { injectIntl, InjectedIntlProps } from 'react-intl';


const AccountPhoto: React.FunctionComponent<Props & InjectedIntlProps> = ({user, sessionId, changeAvatarAction, avatarHandler, avatar, intl, rtl}) => {
    const [imageLoading, imageLoadingHandler ] = useState<boolean>(true)
    const addDefaultSrc = (ev: any) => {
        imageLoadingHandler(false)
        ev.target.src = NoAvatarIcon
    }

    
    const loadImageHandler = () => {
        imageLoadingHandler(false)
    }
    
    const changeAvatarHandler = (event: any) => {
        const files = event.target.files
        if (files && files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                avatarHandler(reader.result)
                // setAvatar(reader.result)
                let formData: any = new FormData();
                formData.append('file_data', files[0]);
                formData.append('SessionID', sessionId);
                changeAvatarAction(formData)
            };
            reader.readAsDataURL(files[0]);
        }
    }


    return (
        <AccountPhotoSection>
            <AccountPhotoStyled>{intl.formatMessage({ id: `global.account_info`})}</AccountPhotoStyled>
            <AvatarWrap>
                <AvatarBlock >
                    <input 
                        onChange={changeAvatarHandler} 
                        name="avatar" 
                        accept="image/gif,image/jpeg,image/png,image/jpg" 
                        type="file" 
                        capture="user"
                    />
                    <AvatarImage loaded={imageLoading} onError={addDefaultSrc} src={avatar ? avatar : `${GetAvatarUrl}${user.id}&SessionID=${sessionId}`} onLoad={loadImageHandler} alt="avatar" />
                    {imageLoading && <NoAvatarStyled loaded={imageLoading}  src={NoAvatarIcon} alt="no avatar" />}
                    <Point rtl={rtl} onClick={changeAvatarHandler}><IconPencil /></Point>
                </AvatarBlock>
            </AvatarWrap>
            <InfoBlock>
                <FullName>{user.full_name}</FullName>
                <Position>{user.title}</Position>
            </InfoBlock>
        </AccountPhotoSection>
    );
};
export default injectIntl(AccountPhoto);
