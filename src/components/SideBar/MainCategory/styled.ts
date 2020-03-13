import styled from "styled-components";
import { IMainCategoryStyled, IMainCategoryTitle } from "./types";

export const MainCategoryTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 30px;
    background: ${(props: IMainCategoryTitle) => 
        props.active ? props.theme.colors.white : props.theme.colors.sideBarColor};
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small15Fs};
    font-weight: normal;
    line-height: normal;
    color: ${props => props.theme.colors.titleColor};
    text-transform: capitalize;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    user-select: none;
    &:hover {
        background-color: ${props => props.active ? props.theme.colors.white : props.theme.colors.menuHover};
    }
`;

export const IconBlock = styled.div`
    margin-right: 15px;
    margin-left: 10px;
`;


export const CategoriesList = styled.div`
    padding: 10px 0;
    transition: min-height 500ms 0ms, opacity 100ms 200ms;
    opacity: ${(props: IMainCategoryStyled) => props.visible ? '1' : '0'};
    box-shadow: -1px 0 0px 0 #e4e9ee;
    @media(max-width: 768px) {
        padding: 0;
    }

`;

export const CategoryName = styled.div`
  font-family: CircularStd;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.2;
  color: ${(props:IMainCategoryTitle) =>  props.active ? props.theme.colors.blueBtn : props.theme.colors.white};
`;


export const MenuIcon = styled.div`
    display: flex;
    margin-left: 15px;
    svg {
        g {
            fill:${(props:IMainCategoryTitle) =>  props.active ? props.theme.colors.blueBtn : props.theme.colors.white};
        }
    }
`;