import styled from 'styled-components';
import { CommonType } from '../../../../../../../constants/common';

type DayStyled = {
    theme: CommonType;
    today: boolean;
    selectedDate: boolean;
}
type EventStyled = {
    type: string;
}

type VacationType = {
    isVacation: string | boolean | undefined;
    theme: CommonType;
}

export const DayStyled = styled.div`
    width: 44px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-family: CircularStd;
    font-size: 13px;
    ${(props: DayStyled) => props.today ? ({
        fontWeight:  'bold',
        color: props.theme.colors.titleColor
    }) : 'normal'};
    ${(props: DayStyled) => props.selectedDate ? ({
        fontWeight:  'bold',
        color: props.theme.colors.blueBtn
    }) : 'normal'};
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
`;


export const DayHightlight = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    ${(props: DayStyled) => props.today ? ({
        background:  props.theme.colors.btnBorder
    }) : 'none'};
    ${(props: DayStyled) => props.selectedDate ? ({
        background:  props.theme.colors.bcgBlue
    }) : 'none'};
`;

export const DayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: ${(props:VacationType) => props.isVacation ? props.theme.colors.yellow : props.theme.colors.white};

`;


export const Events = styled.div`
    position: absolute;
    bottom: 4px;
    display: flex
    
`;

export const Event = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin-right: 2px;
  ${(props: EventStyled) => props.type === 'leaves' && ({
        background:  '#ff7142'
   })};
  ${(props: EventStyled) => props.type === 'absence' && ({
        background:  '#f64540'
   })};

    ${(props: EventStyled) => props.type === 'exceptions' && ({
        background:  '#7621b8'
   })};
`;