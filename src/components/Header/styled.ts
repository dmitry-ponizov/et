import styled from 'styled-components';
import { THeaderStyled } from './types';

export const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 80px;
    box-shadow: 0 1px 4px 0 ${props => props.theme.colors.borderColor};
    display: flex;
    justify-content: space-between;
    background: ${props => props.theme.colors.white};
    direction: ${(props: THeaderStyled) => props.isMobile && 'ltr'};
    @media(max-width: 768px) {
      padding: 10px 5px 10px 15px;
      background: ${props => props.theme.colors.blueBtn};
    }
    position: relative;
`;


export const MobileTitle = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.medium18Fs};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
  line-height: normal;
  text-transform: capitalize;
  white-space: nowrap;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const RigthPanel = styled.div`
  display: flex;
  align-items: center;
`