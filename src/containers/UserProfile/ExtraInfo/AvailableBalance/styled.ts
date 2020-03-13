import styled from "styled-components";

export const InfoBlockStyled = styled.div`
    flex: 1;
    border: 1px solid ${props => props.theme.colors.greyBorder2};
    margin-left: 16px;
    position: relative;
    &:nth-child(1){
        margin-left: 0px;
    }
`;

export const Title = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.titleColor};
  min-height: 36px;
  background: ${props => props.theme.colors.greyBorder2};
  padding: 10px;
`;

export const Value = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: normal;
  text-align: center;
  color: ${props => props.theme.colors.grey2};
  min-height: 32px;
  padding: 2px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalLine = styled.div`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    &:last-child{
      border-right: none;
    }
`
export const BalancesStyled = styled.div`
    display: flex;
    padding: 8px 0;
    .toolTip {
      font-family: CircularStd;
      font-size: ${props => props.theme.fontSizes.small12Fs};
      font-weight: normal;
      text-align: center;
      background: #08A5F0;
      &::after {
        border-bottom-color: #08A5F0!important; 
        border-top-color: #08A5F0!important; 
      }
    }
`

export const BalanceStyled = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`
export const BalanceBlock = styled.div`
  display: flex;
  align-items: center;
`

export const LoaderStyled = styled.div`
    position: absolute;
    top: 60%;
    left: 52%;
`