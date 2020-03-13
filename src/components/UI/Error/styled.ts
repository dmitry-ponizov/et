import styled from "styled-components";

export const ErrorStyled = styled.div`
    display: flex;
    font-family: CircularStd;
    font-style: normal;
    width: 100%;
    color: ${props => props.theme.colors.alertTitle};
    background: #fff;
    /* min-height: 495px; */
    height: 100%;
    padding: 20px 10px;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    flex: 1;
 
`;
export const ErrorTitle = styled.div`
    	color: #C6CBD4;	
        font-family: CircularStd;	
        font-size: 24px;	
        font-weight: 500;
        text-align: center;
        margin-top: 15px;
`;

export const ButtonContainer = styled.div`
   display: flex;
    justify-content: center;
    margin-top: 25px;
`;