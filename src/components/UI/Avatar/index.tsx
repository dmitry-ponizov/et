import React from 'react';
import { Props } from './types';
import { AvatarBlock } from './styled';
import { NoAvatarIcon } from '../../../constants/images';
import { GetAvatarUrl } from '../../../containers/UserProfile/constants';
import ImageFallback from '../ImageFallback';


const Avatar: React.FunctionComponent<Props> = ({userId, sessionId, avatar }) => {
    return (
        <AvatarBlock>
            <ImageFallback
                    src={avatar ? avatar : `${GetAvatarUrl}${userId}&SessionID=${sessionId}`}
                    fallbackImage={NoAvatarIcon}
                    initialImage={NoAvatarIcon}
                    alt="avatar"
                    className="avatar" />
        </AvatarBlock>
    );
};

export default Avatar;
