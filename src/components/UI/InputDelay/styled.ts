import styled from 'styled-components';

export const InputDelayStyled = styled.div`
    input {
        width: 100%;
        border-radius: 4px;
        border: solid 1px ${props => props.theme.colors.btnBorder};
        background-color: ${props => props.theme.colors.white};
        padding: 8px 16px;
        font-family: CircularStd;
        font-size: ${props => props.theme.fontSizes.small16Fs};
        font-weight: normal;
        color: ${props => props.theme.colors.titleColor};
        min-width: 546px;
        min-height: 40px;
        &:focus {
            outline: none;
            border-color: #85b7d9;
        }
    }
`

export const Error = styled.div`
    margin-top: 5px;
    font-size: ${props => props.theme.fontSizes.small12Fs};
    font-family: CircularStd;
    font-weight: normal;
    color: ${props => props.theme.colors.error};
`