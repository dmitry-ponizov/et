import styled from "styled-components";

export const CalendarStyled = styled.div`
    flex: 2;
    
`;
export const CalendarContainer = styled.div`
    max-width: 350px;
    min-height: 220px;
    @media(max-width: 768px) {
        max-width: 100%;
    }
`;
export const DayBar = styled.div`
    display: flex;
    border-top: solid 1px #e3e5e9;
    border-bottom: solid 1px #e3e5e9;
    padding: 7px 0px;
`;

export const WeekDay = styled.div`
    flex: 1;
    text-transform: capitalize;
    font-family: CircularStd;
    font-size: 13px;
    font-weight: bold;
    color: #9191af;
    opacity: 0.5;
    text-align: center;
    user-select: none;
`;

export const DaysStyled = styled.div`
    margin-top: 9px;
`;