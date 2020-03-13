import styled from 'styled-components';
import { CommonType } from '../../../constants/common';

type SearchStyledType = {
    active: boolean;
    theme: CommonType;
}

export const SearchStyled = styled.div`
    width: 100%;
`;

export const ActionsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
    border-bottom: 2px solid ${(props: SearchStyledType) => props.active ? props.theme.colors.blueBtn : props.theme.colors.lightGrey};
`; 


export const ToggleBtn = styled.div`
	height: 32px;
	width: 32px;
	border-radius: 2px 2px 0 0;
	background-color: ${(props: SearchStyledType) => props.active ?  props.theme.colors.blueBtn  :  props.theme.colors.white };
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    border: 1px solid ${(props: SearchStyledType) => props.active ? props.theme.colors.blueBtn   : props.theme.colors.lightGrey};
    cursor: pointer;
`;

export const Actions = styled.div`
    display: flex;
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

export const FiltersBlock = styled.div`
    box-shadow: 0 8px 80px 0 rgba(0,0,0,0.1);
    border: 1px solid #E3E5E9;
    background-color: #FFFFFF;
    width: 100%;
`;