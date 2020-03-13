import styled from "styled-components";
import { DropDownRowStyledType } from './types'

export const DropDownRowStyled = styled.div`
	background-color: ${(props: DropDownRowStyledType) => props.selected ? props.theme.colors.bcgBlue : props.theme.colors.white};
	border: 1px solid ${props => props.theme.colors.borderColor}; 
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.colors.bcgBlue};
        color: ${props => props.theme.colors.white};
    }
`;

export const TitleStyled = styled.div`
    color:	${props => props.theme.colors.titleColor};
    font-family: CircularStd;	
    font-size: ${props => props.theme.fontSizes.small13Fs};	
    font-weight: 300;	
    line-height: 18px;
    padding: 10px 14px;
    user-select: none;
    text-transform: capitalize;
`;

export const CheckboxStyled = styled.div`
    width: 40px;
`;