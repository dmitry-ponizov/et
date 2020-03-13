import styled from "styled-components";
import { FilterDropDownStyledType } from './types';


export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: relative;
    margin-bottom: 5px;
    @media(max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
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
    font-size: 12px;
    padding-bottom: 5px;
  }
`;


export const DropDown = styled.div`
	height: 40px;
	width: 250px;
  @media(max-width: 768px) {
    width: 100%;
  }
	border-radius: 2px;
  border: 1px solid ${(props: FilterDropDownStyledType) => props.error ? props.theme.colors.coral : props.theme.colors.sideBarColor};
	background-color: ${(props: FilterDropDownStyledType) => 
      props.active ? 
      props.theme.colors.sideBarColor:
      props.error ? 
      props.theme.colors.coralLight :  
      props.theme.colors.bcgBlue}; 
    cursor: pointer;
    display: flex;
    color: ${(props: FilterDropDownStyledType) => 
      props.active ? 
      props.theme.colors.white : 
      props.error ? 
      props.theme.colors.coral : 
      props.theme.colors.sideBarColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 500;
    align-items: center;
    font-family: CircularStd;
    padding: 8px 8px 8px 16px;
    justify-content: space-between;
    span {
      text-transform: capitalize;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    svg {
      g {
        fill: ${props => props.error ? props.theme.colors.coral : props.theme.colors.sideBarColor}
      }
    }
`;


export const DropDownBlock = styled.div`
    position: relative;
    @media(max-width: 768px) {
      width: 100%;
    }
`;

export const MenuStyled = styled.div`
    width: 100%;
    position: absolute;
    top: 43px;
    z-index: 101;
    max-height: 500px;
    overflow-y: auto; 
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.sideBarColor};
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

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const ErrorStyled = styled.div`
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small13Fs};
  align-self: flex-end;
  /* text-transform: capitalize; */
`;