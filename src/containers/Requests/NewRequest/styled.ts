import styled from 'styled-components';
import { NewRequestStyledType } from './types';

export const NewRequestStyled = styled.div`
	width: ${(props: NewRequestStyledType) => props.windowParams.width}; 
	border-radius: 2px;
	background-color: ${props => props.theme.colors.white};
	box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    position: absolute;
    top:${(props: NewRequestStyledType) => props.windowParams.top}; 
    left: ${(props: NewRequestStyledType) => props.windowParams.left}; 
    z-index: 101;
    padding: 16px 24px;
    
    @media(max-width: 768px) {
        width: 100%;
        padding: 16px;
        position:static;
    }
`;

export const Title = styled.div`
	color: ${props => props.theme.colors.sideBarColor};
    font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.medium18Fs};
	font-weight: 500;
	line-height: 23px;
`;

export const SelectsBlock = styled.div`
    padding: 25px 0;
    display: flex;
    @media(max-width: 768px) {
        padding: 0;
    }
    @media(max-width: 1054px) {
        flex-direction: column;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.colors.headerBorder};
    padding-bottom: 10px;
    svg {
        cursor: pointer;
    }
    @media(max-width: 768px) {
        display: none;
    }
`;

export const Dropdowns = styled.div`
    max-width: 370px;
    @media(max-width: 768px) {
        max-width: 100%;
    }
    @media(min-width: 769px) and (max-width: 1054px) {
        max-width: 385px;
    }
`;
export const DateTimeFields = styled.div`
    display: flex;
    max-width: 384px;
    flex-direction: column;
    @media(max-width: 768px) {
        max-width: 100%;
    }
    @media(min-width: 769px) and (max-width: 1054px) {
        max-width: 385px;
    }
`; 

export const RightDropdowns = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: ${(props: {rtl: boolean})=> props.rtl ? '10%': '0px'};
    margin-left:  ${(props: {rtl: boolean})=> props.rtl ? '0px': '10%'};
    @media(max-width: 1054px) {
        margin-left: 0;
        margin-right: 0;
    }
`;


export const Buttons = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-self: flex-end;
    margin-top: 12px;
    @media(max-width: 768px) {
        width: 100%;
    }
`;