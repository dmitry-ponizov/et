import styled from 'styled-components';

export const ViewRequestContainer = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    border-radius: 8px; 
`;

export const ViewRequestStyled = styled.div`
	border-radius: 2px;
	background-color: ${props => props.theme.colors.white};
	box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    padding: 16px 24px;
    min-height: 570px;
`;

export const Title = styled.div`
	color: #014798;
    font-family: CircularStd;
	font-size: 18px;
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
`;

export const Requests = styled.div`
    margin-right: 30px;
    div {
        margin-bottom: 0;
    }
`; 

export const RightBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const RequestInfo = styled.div`
    margin-top: 20px;
`;

export const AuthHistory = styled.div`
	height: 41px;
	width: 100%;
	background-color: ${props => props.theme.colors.lightBlue}; 
	box-shadow: 0 1px 0 0 ${props => props.theme.colors.borderColor}; 
	color: ${props => props.theme.colors.textBlue};  
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AuthHistoryTitle = styled.div`
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: 500;
	line-height: 18px;
`;

export const IconBlock = styled.div`
    margin: 0 10px;
`