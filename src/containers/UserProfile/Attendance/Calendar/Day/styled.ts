import styled from 'styled-components';
import { CommonType } from '../../../../../constants/common';

type DayStyled = {
    theme: CommonType;
    today: boolean;
    selectedDate: boolean;
}

type DayType = {
    selectedDate: boolean;
    theme: CommonType;
    currentMonthDay: boolean;
    today: boolean;
}


export const DayStyled = styled.div`
    display: flex;
    flex: 1;
    font-family: CircularStd;
    font-size: 12px;
    min-width: 145px;
    min-height: 100px;
    border-bottom: 1px solid ${(props: DayStyled) => props.theme.colors.grey4};
    border-right: 1px solid ${(props: DayStyled) => props.theme.colors.grey4};
    ${(props: DayStyled) => props.today ? ({
        fontWeight:  'bold',
        color: props.theme.colors.titleColor
    }) : 'normal'};

    ${(props: DayStyled) => props.selectedDate ? ({
        borderTop: `3px solid ${props.theme.colors.blueBtn}` 
    }) : {
        borderTop: `3px solid transparent` 
    }};
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    padding-bottom: 5px;
    position: relative;
`;


export const DayHightlight = styled.div`
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${(props: DayType) => props.selectedDate ? props.theme.colors.blueBtn : !props.currentMonthDay ? props.theme.colors.grey2 : props.theme.colors.titleColor};
    font-weight: ${(props: DayType) => props.selectedDate ? 'bold' : 'normal'};
    ${(props: DayType) => props.today ? ({
        background:  props.theme.colors.btnBorder
    }) : 'none'};
`;

export const DayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Block = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 6px;
    justify-content: space-between;
`

export const BlockRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    align-items: flex-end;
    justify-content: space-between;
`

export const ExceptionsIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70px;
  svg {
      margin-right: 5px;
      margin-top: 5px;
  }
`

export const VacationStyled = styled.div`
    height: 24px;
    background: #ff9d00;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props=> props.theme.colors.white};
    justify-content: center;
    margin-top: 27px;
    text-transform: capitalize;
`
export const DayWithVacation = styled.div`
    width: 100%;
`