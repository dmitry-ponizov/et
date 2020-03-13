import styled from "styled-components";
import { LabelType } from './types';


export const LabelStyled = styled.div`
    background: ${(props:LabelType) => props.colors.bcg};
	color: ${(props:LabelType) => props.colors.color};
	font-family: CircularStd;
	font-size: 12px;
	font-weight: 300;
	line-height: 15px;
	text-align: center;
    border-radius: 12px;
    padding: 1px 10px;
    text-transform: capitalize;
	display: inline-block;
`;