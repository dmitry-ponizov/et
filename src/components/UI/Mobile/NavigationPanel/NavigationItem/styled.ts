import styled from "styled-components";
import { CommonType } from '../../../../../constants/common';

type TitleActive = {
  active: boolean;
  theme: CommonType;
}

export const NavigationItemStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small10Fs};
  font-weight: normal;
  letter-spacing: -0.24px;
  text-align: center;
  color: ${(props:TitleActive) => props.active ? props.theme.colors.blueBtn : props.theme.colors.grey};

`;