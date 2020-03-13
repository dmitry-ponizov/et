import reset from 'react-style-reset';
import { normalize } from 'react-style-reset/string';
import styled, { createGlobalStyle } from "styled-components";
import "circular-std";
import { CommonType } from '../constants/common';

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${normalize};
  box-sizing: border-box;
  html {
    overflow-x: hidden;
  }
  #root {
    height: 100%;
    /* overflow: hidden; */
  }
  .App {
    height: 100%;
  }
 
  /* Tabs */
  .ui.secondary.pointing.menu {
    @media(max-width: 768px) {
      margin-bottom: 8px;
      background: ${(props: CommonType) => props.theme.colors.white};
      border-bottom: none;
      display: flex;
      justify-content: space-between;
    }
  }
  .ui.secondary.pointing.menu .active.item {
    color: ${(props: CommonType) => props.theme.colors.blue};
    font-family: CircularStd;
    font-size: ${(props: CommonType) => props.theme.sizes.small16Fs};
    font-weight: normal;
    line-height: normal;
    color: ${(props: CommonType) => props.theme.colors.blue};
    border-color: ${(props: CommonType) => props.theme.colors.blue};
    white-space: nowrap;
    @media(max-width: 768px) {
      padding: 12px;
      font-size: ${(props: CommonType) => props.theme.fontSizes.small16Fs};
      flex: 1;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid;
    }
    &:hover {
      border-color: ${(props: CommonType) => props.theme.colors.categoryColor}!important;
    }
  }
  .ui.secondary.pointing.menu .item {
    font-family: CircularStd;
    font-size: ${(props: CommonType) => props.theme.small16Fs};
    font-weight: normal;
    line-height: normal;
    color: ${(props: any) => props.theme.colors.subMenuColor};
    white-space: nowrap;
    @media(max-width: 768px) {
      padding: 12px;
      font-size: ${(props: CommonType) => props.theme.fontSizes.small16Fs};
      flex: 1;
      display: flex;
      justify-content: center;
    }
    &:hover {
      color: ${(props: CommonType)=> props.theme.colors.categoryColor}!important;
    }
  }
    /* DropDown */
  .ui.selection.dropdown.viewDropDown{
    padding: 0;
    display: flex;
    align-items: center;
    min-height: 32px;
    height: 32px;
    font-family: CircularStd;
    font-size: ${(props: CommonType)=> props.theme.fontSizes.small14Fs};
    font-weight: normal;
    color: ${(props: CommonType) => props.theme.colors.titleColor};
    padding: 7px 5px 8px 16px;
    position: relative;
    border: none;
    margin: 0;
    img {
      position: absolute;
      top: 12px;
      right: 8px;
    }
  }
  .ui.selection.dropdown .menu>.item {
    font-family: CircularStd;
    font-size: ${(props: CommonType) => props.theme.fontSizes.small14Fs};
    font-weight: normal;
    color: ${(props: CommonType) => props.theme.colors.titleColor};
  }
  .ui.selection.dropdown .menu>.active {
    color: $(props: CommonType) => props.theme.colors.blue};
  }

  .timesheet-table-header-title {
    width: 255px;
  }
  .timesheet-table-header-period {
    width: 170px;
  }
  .selectedDate {
      color: ${(props: CommonType) => props.theme.colors.blue}!important;
  }

  .rc-time-picker-panel {
    .rc-time-picker-panel-input {
      font-family: CircularStd;
	    font-size: ${(props: CommonType) => props.theme.fontSizes.small14Fs};
      color: ${(props: CommonType) => props.theme.colors.titleColor};
    }
    .rc-time-picker-panel-select {
      ul {
        li {
          font-family: CircularStd;
	        font-size: ${(props: CommonType) => props.theme.fontSizes.small14Fs};
          color: ${(props: CommonType) => props.theme.colors.titleColor};
        }
      }
    }
  }
`;

export const WrapStyled = styled.div`
  display: flex;
  width: 100%;
  min-height:100%;
  direction: ${(props: {rtl: boolean}) => props.rtl ? 'rtl': 'ltr'};
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f7f8fc;
  .routes { 
    height: 100%;
  }
  .private-route {
    height: 100%;
  }
  
`;

export const ContentBlock = styled.div`
  padding: 16px 80px;
  margin: 5px auto;
  width: 100%;
  position: relative;
  background-color:  ${(props: CommonType) => props.theme.colors.contentColor}; 
  @media(min-width: 769px) and (max-width: 1450px) {
    padding: 16px;
  }

  @media(max-width: 768px) {
    padding: 0;
  }
`;


export const TabRigthPanelStyled = styled.div`
        position: absolute;
        top: 30px;
        right: 92px;
        display: flex;
        align-items: center;
        .ui.selection.dropdown.viewDropDown.viewDropDown {
          width: 128px;
        }
        @media(max-width: 768px) {
          display: none;
        }
        div {
            &:nth-child(2) {
                margin-left: 8px;
            }

        }
`;


export const MainContentStyled = styled.div`
    margin-top: 15px;
`;

export const Card = styled.div`
    border-radius: 4px;
    border-top: 2px solid ${props => props.theme.colors.blueBtn};
    background: #fff;
    border-right: 1px solid #e4e9ee;
    border-left: 1px solid #e4e9ee;
    border-bottom: 1px solid #e4e9ee;
    margin-top: 8px;
    align-items: center;
`

export const UsersList = styled.div`
    padding: 0 16px 16px 16px;
`


export const TitleUI = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.medium22Fs};	
    font-weight: bold;	
    line-height: 28px;
`