import React, { useState } from 'react';
import { AccountPhotoStyled, AvatarWrapper, AvatarBlock, Point, AvatarImage, NoAvatarStyled, FullName, Position } from './styled';
import { UploadAvatarIcon } from '../../../constants/images';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { IconPencil } from '../../../components/UI/SvgIcons/icon-pencil';
import { GetAvatarUrl } from '../../UserProfile/constants';
import { Props } from './types';

const AccountPhoto: React.FunctionComponent<Props & InjectedIntlProps> = ({
    user,
    sessionId,
    changeAvatarAction,
    avatarHandler,
    avatar,
    intl,
    rtl
}) => {
    const [imageLoading, imageLoadingHandler] = useState<boolean>(true)

    const addDefaultSrc = (ev: any) => {
        imageLoadingHandler(false)
        ev.target.src = UploadAvatarIcon
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
                let formData: any = new FormData();
                formData.append('file_data', files[0]);
                formData.append('SessionID', sessionId);
                changeAvatarAction(formData)
            };
            reader.readAsDataURL(files[0]);
        }
    }

    return (
        <AccountPhotoStyled>
            <AvatarWrapper>
                <AvatarBlock >
                    <input onChange={changeAvatarHandler} name="avatar" accept="image/gif,image/jpeg,image/png,image/jpg" type="file" />
                    <AvatarImage loaded={imageLoading} onError={addDefaultSrc} src={avatar ? avatar : `${GetAvatarUrl}${user.id}&SessionID=${sessionId}`} onLoad={loadImageHandler} alt="avatar" />
                    {imageLoading && <NoAvatarStyled loaded={imageLoading} src={UploadAvatarIcon} alt="no avatar" />}
                    <Point rtl={rtl} onClick={changeAvatarHandler}><IconPencil /></Point>
                </AvatarBlock>
            </AvatarWrapper>
            <FullName>{user.full_name}</FullName>
            <Position>{user.title}</Position>
        </AccountPhotoStyled>
    );
};

export default injectIntl(AccountPhoto);
