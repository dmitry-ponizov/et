import styled from "styled-components";
import { CommonType } from '../../constants/common';

type SideBarStyled = {
  isMobile: boolean;
  theme: CommonType;
}

export const SideBarStyled = styled.div`
    min-width: 248px;
    transition: min-width 2s;
    box-shadow: -1px 0 4px 0 ${props => props.theme.colors.borderColor};
    min-height: 100vh;
    background: ${props => props.theme.colors.sideBarColor};
    z-index: 2;
    display: ${(props: SideBarStyled) => props.isMobile ? 'none': 'block'};
`;

export const LogoStyled = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 74px; 
        height: 55px;
    }
    img {
        &:first-child {
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
    }
    @media(max-width: 768px) {
        padding: 32px 20px 16px 40px;
    }
`;

export const CancelIconStyled = styled.img`
    height: 12px;
    width: 12px;
    cursor: pointer;
    @media(min-width: 1366px) {
        display: none;
    }
`;