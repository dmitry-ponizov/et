import React from 'react'
import { Props }  from './types';
import Day from '../Day/index';
import { WeekStyled } from './styled';

const Week: React.FC<Props> = ({ week, selectDayHandler, selectedDate, currentMonth, calendarData }) => {
    return (
        <WeekStyled>
            { week.map((day: any, index: number) => 
                <Day 
                    key={index} 
                    day={day} 
                    selectDayHandler={selectDayHandler} 
                    currentMonth={currentMonth} 
                    selectedDate={selectedDate}
                    calendarData={calendarData} 
                />) }

        </WeekStyled>
    )
}

export default Week;