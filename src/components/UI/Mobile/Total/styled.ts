import styled from "styled-components";

export const TotalSection = styled.div`
    background: ${props => props.theme.colors.contentColor};
    color: ${props => props.theme.colors.grey};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small12Fs};
    font-weight: normal;
    letter-spacing: -0.26px;
    text-align: center;
    padding: 10px 10px 5px 10px;
`