import styled from "styled-components";

export const CalendarStyled = styled.div`
    flex: 2;
    
`;
export const CalendarContainer = styled.div`
    min-height: 220px;
    @media(max-width: 768px) {
        max-width: 100%;
    }
`;
export const DayBar = styled.div`
    display: flex;
    padding: 7px 0px;
`;

export const WeekDay = styled.div`
    flex: 1;
    text-transform: uppercase;
    font-family: CircularStd;
	color: #9191AF;	
    font-size: 10px;	
    font-weight: 500;	
    letter-spacing: 2px;	
    line-height: 13px;
    opacity: 0.6;
`;

export const DaysStyled = styled.div`
    margin-top: 9px;
`;