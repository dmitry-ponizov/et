import styled from "styled-components";

export const ModalContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Icon = styled.div`
    width: 33px;
    height: 33px;
    margin-top: 15px;
`;

export const Status = styled.div`
    color: ${props => props.theme.colors.titleColor};	
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium22Fs};
    font-weight: 500;	
    line-height: 32px;
    margin-top: 24px;
`;

export const Message = styled.div`
    color: ${props => props.theme.colors.titleColor};		
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small15Fs};
    font-weight: 300;	
    line-height: 24px;	
    margin-top: 5px;
`;

export const Button = styled.div`
	height: 36px;
	width: 178px;
	border-radius: 4px;
	background-color: ${props => props.theme.colors.sideBarColor};
    color: ${props => props.theme.colors.white};	
    font-family: CircularStd;	
    font-size: 14px;	
    font-weight: bold;	
    line-height: 18px;	
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    cursor: pointer;
`;
