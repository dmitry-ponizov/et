import styled from "styled-components";

export const InfoBlockStyled = styled.div`
    flex: 1;
    border: 1px solid ${props => props.theme.colors.greyBorder2};
    margin-left: 16px;
    position: relative;
    &:nth-child(1){
        margin-left: 0px;
    }
    max-width: 24%;
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
  padding: 10px;
`;