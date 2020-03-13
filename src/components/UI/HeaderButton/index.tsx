import React from 'react';
import { HeaderButtonContainer, Icon, Title } from './styled';
import { Props } from './types';

export const HeaderButton: React.FC<Props> = ({icon, title, clickHandler, isMobile}) => {
    
    return (
        <HeaderButtonContainer onClick={clickHandler} isMobile={isMobile}>
            <Icon isMobile={isMobile}>{icon}</Icon>
            <Title>{title}</Title>
        </HeaderButtonContainer>
    )
}
export default HeaderButton;