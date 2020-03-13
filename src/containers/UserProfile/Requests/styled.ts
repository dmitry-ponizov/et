import styled from "styled-components";

export const PageTitle = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium22Fs};	
    font-weight: bold;	
    line-height: 28px;
    margin-top: 15px;
`;