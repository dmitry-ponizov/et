import styled from "styled-components";
import { FilterDropDownStyledType } from './types';

type ErrorStyled = {
  right: string;
}
export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 12px;
    position: relative;
`;

export const LabelDropDown = styled.div`
	color: ${props => props.theme.colors.titleColor};
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: 500;
	line-height: 18px;
	text-align: right;
  margin-right: 15px;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const DropDown = styled.div`
	height: 32px;
	width: 250px;
	border-radius: 2px;
	background-color: ${(props: FilterDropDownStyledType) => 
      props.active ? 
      props.theme.colors.textBlue:  
      props.error ? 
      props.theme.colors.coralLight :  
      props.theme.colors.lightBlue}; 
    cursor: pointer;
    display: flex;
    color: ${(props: FilterDropDownStyledType) => 
      props.active ? 
      props.theme.colors.white : 
      props.error ? 
      props.theme.colors.coral : 
      props.theme.colors.textBlue};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 500;
    align-items: center;
    font-family: CircularStd;
    padding: 8px 8px 8px 16px;
    justify-content: space-between;
    span {
      text-transform: capitalize;
    }
    svg {
      g {
        fill: ${props => props.error ? props.theme.colors.coral : ''}
      }
    }
`;

export const DropDownBlock = styled.div`
    position: relative;
`;

export const MenuStyled = styled.div`
    width: 100%;
    position: absolute;
    top: 36px;
    z-index: 101;
    /* max-height: 400px;
    overflow-y: auto; */
    background: ${props => props.theme.colors.white};
    border: 3px solid #C4DEFF;
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


export const ErrorStyled = styled.div`
  position: absolute;
  right: ${(props: ErrorStyled) => props.right};
  bottom: 8px;
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small14Fs};
`;