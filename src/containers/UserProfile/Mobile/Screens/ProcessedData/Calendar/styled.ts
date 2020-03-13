import styled from "styled-components";

export type ApplyBtnType = {
    isActive: boolean;
    theme: any;
}

export const CalendarSection = styled.div`

    .Selectable {
        width: 100%;
        &:focus {
            outline: none;
        }
        .DayPicker-wrapper{
            &:focus {
                outline: none;
            }
        }
        .DayPicker-Caption {
            padding-bottom: 6px;
        }
        .DayPicker-Month {
            background: ${props => props.theme.colors.white};
            @media(max-width: 640px) {
                height: 74vw;
                width: 100%;
            }
            
            border: 1px solid ${props => props.theme.colors.borderColor};
        }
        .DayPicker-WeekdaysRow {
            border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        }
        .DayPicker-Weekday {
            padding: 0.8rem;
        }

        .DayPicker-Day,.DayPicker-Weekdays,.DayPicker-Caption {
            font-family: CircularStd;
            font-size: ${props => props.theme.fontSizes.small14Fs};
            font-weight: normal;
            color: ${props => props.theme.colors.titleColor};
        }
        .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
            background-color: ${props => props.theme.colors.calendarSelected}!important;
            color: ${props => props.theme.colors.titleColor};
        }
        .DayPicker-Day {
            border-radius: 0 !important;
        }
        .DayPicker-Day--outside {
            color: ${props => props.theme.colors.titleColor};
        }
        .DayPicker-Day--start {
            border-top-left-radius: 50% !important;
            border-bottom-left-radius: 50% !important;
            color: ${props => props.theme.colors.titleColor}!important;
            &:focus {
                outline: none;
            }
        }
        .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
            background-color: ${props => props.theme.colors.calendarBcg}!important;
        }
        .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
            background-color: ${props => props.theme.colors.calendarBcg}!important;
        }
        .DayPicker-Day--end {
            border-top-right-radius: 50% !important;
            border-bottom-right-radius: 50% !important;
            color: ${props => props.theme.colors.titleColor}!important;
            &:focus {
                outline: none;
            }
        }

        .DayPicker-NavBar {
            span {
                &:focus {
                outline: none;
                }
            }
        }
    }

`
export const ApplyBtn = styled.div`
    border-radius: 2px;
    background-color: ${(props: ApplyBtnType) => props.isActive ? props.theme.colors.blueBtn : props.theme.colors.white};
    padding: 13px;
    font-family: CircularStd;
    font-size: ${props => props.theme.fontSizes.medium18Fs};
    font-weight: 500;
    color: ${(props: ApplyBtnType) => props.isActive ? props.theme.colors.white: props.theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props: ApplyBtnType) => props.isActive ? props.theme.colors.blueBtn : props.theme.colors.lightGrey};
    transition: all 0.3s ease-in-out;
`; 


export const ButtonSection = styled.div`
  padding: 16px;
`