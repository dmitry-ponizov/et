import styled from "styled-components";

export const DropDownStyled = styled.div`
    display: flex;
    margin-right: 8px;
    border-radius: 2px;
    border: solid 1px ${props => props.theme.colors.btnBorder};
    background: ${props => props.theme.colors.white};
    align-items: center;
    padding: 9px 15px;
    width: 250px;
    user-select: none;
    min-height: 32px;
    cursor: pointer;
    .ui.selection.active.dropdown .menu {
        left: -81px;
        width: 298px;
    }
    .ui.selection.active.dropdown {
        box-shadow: none;
    }
    .ui.selection.dropdown.viewDropDown.viewDropDown {
        width: 215px;
        padding-left: 5px;
    }
    .text {
        white-space: nowrap;
        overflow: hidden;
        font-size: ${props => props.theme.fontSizes.small13Fs};
        text-overflow: ellipsis;
    }
    .ui.selection.dropdown .menu>.item  {
        margin-left: 0;
    }
`;

export const DropDownTitle = styled.div`
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: normal;
    color: ${props => props.theme.colors.subMenuColor};
    cursor: pointer;
    user-select: none;
    white-space: nowrap; 
`;

export const SelectedUser = styled.div`
    color: ${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small14Fs};
    font-weight: 300;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    min-width: 132px;
    text-align: center;
`;

export const DropDownContainer = styled.div`
    position: relative;
`;

