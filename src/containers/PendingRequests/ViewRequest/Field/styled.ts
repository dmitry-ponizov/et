import styled from "styled-components";
import { CommonType } from '../../../../constants/common';

type FieldStyled = {
	type: string;
	theme: CommonType;
}

export const FieldStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid ${(props: FieldStyled) => props.type === 'textarea' ? 'transparent' : props.theme.colors.borderColor};
	min-height: ${(props: FieldStyled) => props.type === 'textarea' ? '80px' : 'auto' };
`;

export const LabelStyled = styled.div`
	color: ${props => props.theme.colors.subMenuColor};
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: 500;
	letter-spacing: -0.3px;
	line-height: 18px;
	text-align: right;
    min-width: 120px;
`;

export const TitleStyled = styled.div`
	color: ${props => props.theme.colors.titleColor};
	font-family: CircularStd;
	font-size: ${props => props.theme.fontSizes.small14Fs};
	font-weight: 500;
	letter-spacing: -0.3px;
	line-height: 18px;
    margin-left: 15px;
`;