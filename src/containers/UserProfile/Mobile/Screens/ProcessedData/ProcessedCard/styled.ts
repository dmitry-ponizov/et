import styled from "styled-components";

export const ProcessedCardStyled = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    margin-top: 8px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    border-radius: 2px;
    &:nth-child(1) {
      margin-top: 0px;
    }
`;

export const VerticalLine = styled.div`
    width: 1px;
    height: 120px;
    /* margin-left: 24px; */
    border-left: 1px solid ${props => props.theme.colors.borderColor};
`;

export const Section = styled.div`
    margin: 0 24px;
`
export const Value = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium22Fs};
  font-weight: 500;
  letter-spacing: -0.53px;
  color: ${props => props.theme.colors.titleColor};

`

export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: normal;
  letter-spacing: -0.34px;
  color: ${props => props.theme.colors.grey};
  margin-top: 10px;
`


export const IconStyled = styled.div`
  padding: 16px;
`