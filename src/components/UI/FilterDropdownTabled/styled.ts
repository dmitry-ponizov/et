import styled from "styled-components";


type DropSownStyledType = {
  height: string | undefined;
  width: string | undefined;
  theme: any;
  left: string | undefined;
  rtl: boolean
}
type DDStyledType = {
  error: boolean;
  theme: any;
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
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


export const MenuStyled = styled.div`
    width: 100%;
    position: absolute;
    top: 43px;
    z-index: 101;
    left: ${(props: DropSownStyledType) => props.rtl ? '0px' : props.left ? props.left : '0px'};
    min-width: ${(props: DropSownStyledType) => props.width ? props.width : '1000px'};
    @media(max-width: 768px) {
      min-width: 100%;
    }
    max-height: ${(props: DropSownStyledType) => props.height ? props.height : '1000px'};
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

export const ErrorStyled = styled.div`
  color: ${props => props.theme.colors.coral};
  font-family: CircularStd;
  font-size: ${props => props.theme.fontSizes.small13Fs};
  align-self: flex-end;
  /* text-transform: capitalize; */
`;