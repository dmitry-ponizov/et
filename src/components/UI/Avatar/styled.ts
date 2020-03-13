import styled from 'styled-components';
import { AvatarLoadType } from './types';

export const AvatarBlock = styled.label`
    position: relative;
    input {
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    .noAvatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        background-image: url('./images/icons/no_avatar.png');
        background-repeat: no-repeat;
    }
`;


export const AvatarImage = styled.img`
  display: ${(props: AvatarLoadType) => props.loaded ? 'none' : 'block'}
`