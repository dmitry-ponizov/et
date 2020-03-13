import styled from 'styled-components';
import { CurrentMonthStyled } from './types';

export const CurrentMonthContainer = styled.div`
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.blueBtn};
    background-color: ${props => props.theme.colors.bcgBlue};
    display: flex;
    align-items: center;
    min-width: 200px;
    min-height: 40px;
    padding: 8px 12px;
    justify-content: space-between;
`;

export const MonthStyled = styled.div`
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.theme.colors.titleColor};
  width: 70px;
  user-select: none;
  margin-left: 8px;
`;


export const Buttons = styled.div`
    display: flex;
    direction: ltr;
`;

export const Button = styled.div`
    cursor: pointer;
    &:nth-child(2) {
        margin-left: 8px;
    }
`;

export const CurrentMonthSection = styled.div`
    position: relative;
    cursor: pointer;
`;

export const DropdownMenu = styled.div`
   position: absolute;
    top: 46px;
    left: 0;
    background: ${props => props.theme.colors.white};
    max-height: 250px;
    overflow-y: auto;
    width: 100%;
    box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    z-index: 99;
    &:-moz-placeholder {
      color:  ${props => props.theme.colors.scrollColor};
    }

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background:  ${props => props.theme.colors.scrollColor};
    }

    &::-webkit-scrollbar-thumb {
      background: white; 
    }
`;

export const CurrentMontBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const IconStyled = styled.div`
    width: 8px;
    height: 12px;
    margin-right: 16px;
`;

export const DropdownItem = styled.div`
  padding: 5px 16px;
	color: ${(props: CurrentMonthStyled) => props.active ? props.theme.colors.blueBtn : props.theme.colors.titleColor};
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: ${(props: CurrentMonthStyled) => props.active ? '600': '300'};
	line-height: 31px;
  display: flex;
  &:hover {
    background: ${props => props.theme.colors.bcgBlue};
    color: ${props => props.theme.colors.blueHover};
  }

`;