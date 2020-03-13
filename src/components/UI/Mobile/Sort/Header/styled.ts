import styled from "styled-components";

export const HeaderStyled = styled.div`
    padding: 16px 16px 9px 16px;
    background: ${props => props.theme.colors.blueBtn};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium18Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: normal;
  white-space: nowrap;
  margin-left: 30px;
`;

export const BackBtn = styled.div`
    svg {
        polyline { 
          stroke: #fff;
        }
    }
`

export const ResetBtn = styled.div`
   font-family: CircularStd;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.34px;
  color: ${props => props.theme.colors.white};
  svg {
    path {
      fill:${props => props.theme.colors.white};
    }
  }
`