import styled from "styled-components";

export const LoginWrap = styled.div`
    min-height: 100%;
    background: url('./images/bg_login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;

export const LoginContainer = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const LogoStyled = styled.div`
    margin-top: 116px;
    @media(max-width: 768px) {
        margin-top: 0px;
    }
    svg {
        width: 148px; 
        height: 102px;
    }
`;

export const LoginFormStyled = styled.div`
    padding: 56px 96px;
    border-radius: 4px;
    box-shadow: 0 2px 20px 0 #1161be;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    @media(max-width: 768px) {
        background:#f7f8fc;
        padding: 20px 20px;
    }
`;

export const TitleStyled = styled.div`
    font-family: CircularStd;
    padding: 0 0 17px 0;
    font-size: 22px;
    font-weight: bold;
    color: #08a5f0;
`;

export const DropDownStyled = styled.div`
    .ui.fluid.dropdown.loginDropDown {
        width: 368px;
        padding: 0;
        display: flex;
        align-items: center;
        min-height: 40px;
        height: 40px;
        font-family: CircularStd;
        font-size: ${(props: any) => props.theme.fontSizes.small14Fs};
        font-weight: normal;
        color: ${props => props.theme.colors.titleColor};
        padding: 7px 5px 8px 16px;
        position: relative;
        border-radius: 2px;
        @media(max-width: 768px){
            width: 326px;
        }
        img {
            position: absolute;
            top: 17px;
            right: 10px;
        }
    }
`;

export const FieldStyled = styled.div`
    margin-top: 30px;
    width: 100%;
    &:first-child {
        margin-top: 0;
    }
    .ui.input.loginFormInput>input {
        min-height: 40px;
        height: 40px;
        font-family: CircularStd;
        width: 368px;
        border: solid 1px #e3e5e9;
        font-weight: normal;
        font-size: ${(props: any) => props.theme.fontSizes.small14Fs};
        border-radius: 2px;
        @media(max-width: 768px){
            width: 326px;
        }
        
    }
`;

export const ErrorTitle = styled.div`
    color: ${props => props.theme.colors.error};
    font-family: CircularStd;
    font-size: ${(props: any) => props.theme.fontSizes.small12Fs};
    margin-top: 10px;
`

export const Label = styled.div`
  font-family: CircularStd;
  font-size: 14px;
  font-weight: 500;
  color: #333333; 
  padding-bottom: 5px;
`