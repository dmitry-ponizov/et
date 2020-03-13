import styled from "styled-components";
import { ICategoryStyled } from "./types";

export const CategoryStyled = styled.div`
    background-color: ${props => props.theme.colors.sideBarColor};
    padding:15px 68px  10px 68px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    white-space: nowrap;
    &:hover {
        color: ${props => props.theme.colors.categoryHover};
    }
`;

export const Point = styled.div`
    width: 4px;
    height: 4px;
    background-color: ${props => props.theme.colors.categoryHover};
    border-radius: 50%;
    margin-right: 8px;
`;

export const CategoryTitle = styled.div`
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.small15Fs};
    font-weight: normal;
    line-height: normal;
    color: ${(props: ICategoryStyled) => 
      props.active ? props.theme.colors.categoryHover : props.theme.colors.white};
    text-transform: capitalize;
    margin-left: ${(props: ICategoryStyled) => 
      props.active ? '0' : '12px'}
`;