import styled from "styled-components";
import { CommonType } from '../../../constants/common';


type DropSownStyledType = {
  height: string | undefined;
  width: string | undefined;
  theme: CommonType;
}
type DDStyledType = {
  error: boolean;
  theme: CommonType;
}

type ErrorStyled = {
  right: string;
}

type PositionType = {
  left: string | undefined;
  width: string | undefined;
  height: string | undefined;
  theme: CommonType;
}

export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 12px;
    position: relative;
    @media(max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
`;


export const LabelDropDown = styled.div`
	color: ${props => props.theme.colors.titleColor};
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: 500;
	line-height: 18px;
	text-align: right;
  margin-right: ${(props: {rtl: boolean})=> props.rtl ? '0px': '15px'};
  margin-left: ${(props: {rtl: boolean})=> props.rtl ? '15px': '0px'};
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media(max-width: 768px) {
    justify-content: flex-start;
    padding-bottom: 5px;
    font-size: 12px;
  }
`;

export const DropDown = styled.div`
	height: 40px;
  width: 250px;
  @media(max-width: 768px) {
    width: 100%;
  }
	border-radius: 2px;
  border: 1px solid ${(props: DDStyledType) => props.error ? props.theme.colors.coral : props.theme.colors.sideBarColor};
	background-color: ${(props: DDStyledType) => props.error ? props.theme.colors.coralLight : props.theme.colors.bcgBlue};
    cursor: pointer;
    display: flex;
    color: ${(props: DDStyledType) => props.error ? props.theme.colors.coral :  props.theme.colors.sideBarColor};
    font-family: CircularStd;	
    font-size: ${(props: DDStyledType) => props.theme.fontSizes.small14Fs};
    font-weight: 500;
    align-items: center;
    font-family: CircularStd;
    padding: 8px 8px 8px 16px;
    justify-content: space-between;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    svg {
      g {
        fill: ${(props: DDStyledType) => props.error ? props.theme.colors.coral : props.theme.colors.sideBarColor};
      }
    }
`;

export const DropDownBlock = styled.div`
    position: relative;
    @media(max-width: 768px) {
      width: 100%;
    }
`;

export const TableMenu = styled.div`
    min-width: ${(props: DropSownStyledType) => props.width ? props.width : '1000px'};
    max-height: ${(props: DropSownStyledType) => props.height ? props.height : '1000px'};
    overflow-y: auto;
    &::-webkit-input-placeholder {
      color: ${props => props.theme.colors.scrollColor};
    }

    &:-moz-placeholder {
      color:  ${props => props.theme.colors.scrollColor};
    }

    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
`;

export const MenuStyled = styled.div`
    width: 100%;
    position: absolute;
    top: 43px;
    left: ${(props: PositionType) => props.left ? props.left : '1014px'};
    z-index: 101;
    min-width: ${(props: PositionType) => props.width ? props.width : '1000px'};
    @media(max-width: 768px) {
      min-width: 100%;
    }
    max-height: 735px;
    background: ${props => props.theme.colors.white};
    border: 3px solid ${props =>  props.theme.colors.sideBarColor};
    overflow: hidden;
`;


export const ErrorStyled = styled.div`
  position: absolute;
  right: ${(props: ErrorStyled) => props.right};
  bottom: 8px;
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
`;

export const SelectedItems = styled.div`
  color: #1161BE;	
  font-family: CircularStd;
  font-size: 14px;	
  font-weight: bold;	
  line-height: 17px;
  padding: 6px 0px 8px 15px;
  background: ${props =>  props.theme.colors.bcgBlue};
`;


export const ApplyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #E4E9EE;
  background: #fff;
`;