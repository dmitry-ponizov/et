import styled from "styled-components";
import { PunchStyledProps } from './types'

export const PunchWrapper = styled.div`
    width: ${(props: PunchStyledProps) => props.width ? props.width : '624px'};
    position: absolute;
    border-radius: 2px;
	background-color: ${props => props.theme.colors.white};
	box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    position: absolute;
    top: 134%;
    left: 25%;
    z-index: 101;
    padding: 16px 24px;
    min-height: 333px;
    @media(max-width: 768px) {
        width: 100%;
        padding: 16px;
        position:static;
        height: 100%;
    }

`
export const PunchStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    @media(max-width: 768px) {
        height: 100%;
    }
    
`

export const Title = styled.div`
	color: ${props => props.theme.colors.sideBarColor};
    font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.medium18Fs};
	font-weight: 500;
	line-height: 23px;
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

export const PunchBody = styled.div`
    padding: 28px;   
    display: flex;
    @media(max-width: 768px) {
        padding: 0px; 
        flex-direction: column;
        flex: 1 0 auto;
    }
`

export const LeftBlock = styled.div`
    flex: 1;
    margin-top: 11px;
    margin-right: ${(props: {rtl: boolean}) => props.rtl ? '0' : '50px'};
    @media(max-width: 768px) {
        margin-right: 0px;
        flex: 0;
    }
`

export const RightBlock = styled.div`
    flex: 1;
    @media(max-width: 768px) {
        margin-top: 15px;
    }
`

export const Buttons = styled.div`
    display: flex;
    width: 320px;
    justify-content: space-between;
    align-self: center;
    padding-bottom: 35px;
    margin-top: 5px;
    @media(max-width: 768px) {
        width: 100%;
        flex: 0 0 auto;
        padding-bottom: 45px;
    }
`;