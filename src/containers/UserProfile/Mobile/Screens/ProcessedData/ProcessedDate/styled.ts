import styled from "styled-components";

export const ProcessedDateStyled = styled.div`
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.btnBorder};
`


export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small12Fs};
  font-weight: normal;
  color: ${props => props.theme.colors.grey2};
`;

export const Date = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small16Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 5px;
`;