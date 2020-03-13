import styled from "styled-components";

export const RequestButtonStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px;
    outline: 1px solid ${props => props.theme.colors.btnBorder};
    flex: 1;
    cursor: pointer;
`;
export const IconStyled = styled.div`

`;
export const TitleStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small10Fs};
  font-weight: 500;
  line-height: 1.4;
  color: ${props => props.theme.colors.titleColor};
  margin-top: 3px;
`;