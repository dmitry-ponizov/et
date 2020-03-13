import styled from "styled-components";

export const Label = styled.div`
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
        padding-bottom: 5px;
        justify-content: flex-start;
    }
    @media(min-width: 769px) and (max-width: 1054px) {
        width: auto;
        justify-content: flex-start;
    }
    div {
        margin-top: 10px;
    }
`;

export const FilterTextareaStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 12px;
    @media(max-width: 768px) {
        flex-direction: column;
    }
    @media(max-width: 1054px) {
        justify-content: flex-start;
    }
    textarea { 
        width: 250px!important;
        font-family: CircularStd;
        font-size: 13px!important;
        @media(max-width: 768px) {
            width: 100%!important;
        }
    }
`;
