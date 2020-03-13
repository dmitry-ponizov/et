import React from 'react'
import { CalendarStyled, DayBar, WeekDay, DaysStyled, CalendarContainer } from './styled';
import { weekDays } from '../../../../constants';
import { Props } from './types';
import Week from './Week/index';

const Calendar: React.FC<Props> = ({ weeks, selectDayHandler, selectedDate, currentMonth, calendarData }) => {
    return (
        <CalendarStyled>
            <CalendarContainer>
                <DayBar>
                    {weekDays.map((wday: string) => <WeekDay key={wday}>{wday}</WeekDay>)}
                </DayBar>
                <DaysStyled>
                    {weeks.map((week: any, index: number) =>
                    <Week 
                        key={index} 
                        week={week} 
                        currentMonth={currentMonth} 
                        selectDayHandler={selectDayHandler} 
                        selectedDate={selectedDate} 
                        calendarData={calendarData}
                    />)}
                </DaysStyled>
            </CalendarContainer>
        </CalendarStyled>
    )
}

export default Calendar;