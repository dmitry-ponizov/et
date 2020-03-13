import styled from "styled-components";
import { CommonType } from '../../../constants/common';

type TimePickerStyled = {
    error: boolean;
    theme: CommonType;
}

export const TimePickerStyled = styled.div`
    .rc-time-picker{
        border-radius: 2px;
        min-width: 114px;
        min-height: 40px;
        cursor: pointer;
        input { 
            font-family: CircularStd;
	        font-size: ${props => props.theme.fontSizes.small14Fs};
            min-height: 40px;
            max-width: 114px;
            border: solid 1px ${(props: TimePickerStyled) => props.error ?  props.theme.colors.coral : props.theme.colors.btnBorder};
            color: ${(props: TimePickerStyled) => props.error ?  props.theme.colors.coral : props.theme.colors.titleColor};
            &:focus {
                outline: none;
            }
        }
        .ivToam {
            svg {
                rect, path {
                    fill: ${(props: TimePickerStyled) => props.error ?  props.theme.colors.coral : props.theme.colors.btnBorder};
                }
            }
        }

    }
`;

export const IconContainer = styled.div`
    position: absolute;
    right: 12px;
    top: 10px;
`