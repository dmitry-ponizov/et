import styled from "styled-components";
import { CommonType } from '../../../constants/common';

type DayPickerStyled = {
    error: boolean;
    theme: CommonType;
    type: string | undefined;
    rtl: boolean;
}

export const DayPickerStyled = styled.div`
    position: relative;
    @media(max-width: 768px) {
        width: 100%;
    }

    .DayPickerInput {
        height: 40px;
        @media(max-width: 768px) {
            width: 100%;
        }
        input { 
            width: 250px;
            min-height: 40px;
            background-color: ${(props: DayPickerStyled) => props.error ? props.theme.colors.coralLight : props.theme.colors.bcgBlue};
            border: solid 1px ${(props: DayPickerStyled) => props.error ? props.theme.colors.coral : props.theme.colors.blueBtn};
            @media(max-width: 768px) {
                width: 100%;
            }
            /* ${(props: DayPickerStyled) => props.type && props.type === 'user' ? ({
                minHeight: '43px',
                border: `solid 1px ${props.error ? props.theme.colors.coral : props.theme.colors.blueBtn}`,
                backgroundColor: '#e4f6ff'
            }) : ({
                 minHeight: '32px',
                 border: `solid 1px ${props.error ? props.theme.colors.coral : props.theme.colors.btnBorder}`,
                  backgroundColor: '#fff'
            })}; */
            max-height: 32px;
            border-radius: 2px;
            cursor: pointer;
            font-family: CircularStd;
            font-size: ${(props: DayPickerStyled)  => props.theme.fontSizes.small14Fs};
            font-weight: normal;
            line-height: 1;
            color: ${(props: DayPickerStyled) => props.error ? props.theme.colors.coral : props.theme.colors.blueBtn};
            padding: 13px 16px;
            &:focus {
                outline: none;
            }
        }
    
            .DayPickerInput-OverlayWrapper {
                font-family: CircularStd;
                font-size: ${props => props.theme.fontSizes.small14Fs};
                font-weight: normal;
                line-height: 1;
                color: ${props => props.theme.colors.titleColor};
                top: 3px;
                left: -7px;
                @media(max-width: 768px) {
                    width: 100%;
                    left: 0px;
                }
            }
        .DayPicker-Day {
            height: 35px;
        }
    }
    
`;

export const CalendarIcon = styled.div`
    position: absolute;
    ${(props: DayPickerStyled) => props.type && props.type === 'user' ? ({
        top: '8px'
        }) : ({
        top: '7px'
    })};
    ${(props: DayPickerStyled) => props.rtl  ? ({
        left: '8px'
        }) : ({
        right: '8px'
    })};
    svg {
        width: 24px;
        height: 24px;
        path {
            stroke:  ${(props: DayPickerStyled) => props.error ? props.theme.colors.coral : ''};
        }
    }
`;