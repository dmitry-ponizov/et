import React from 'react'
import { Props } from './types';
import { DayStyled, DayHightlight, DayContainer, Event, Events,  } from './styled';
import moment from 'moment';


const Day: React.FC<Props> = ({day, selectDayHandler, selectedDate, currentMonth, calendarData}) => {
    const  today = moment().format("YYYY-MM-DD");
    const date = day.format("YYYY-MM-DD");
    
    const selectDay = () => {
        selectDayHandler(date)
    }
    const dayData = calendarData[date];
    
    const isVacaton = () => {
        if(!dayData || !dayData.isVacation) return 
        return dayData.isVacation;
    }

    const checkExceptions = () => {
        if(!dayData || !Boolean(dayData.exceptions.length)){
            return false
        }
        return true;
    }
    const checkAbcense= () => {
        if(!dayData || !dayData.absenceTime){
            return false
        }
        return true;
    }

    const checkLeaves= () => {
        if(!dayData || !dayData.leavesTime){
            return false
        }
        return true;
    }

    return (
        <DayStyled today={today  === date} selectedDate={selectedDate === date}>
            {currentMonth === parseInt(day.format('M')) &&  
            <DayContainer onClick={selectDay} isVacation={isVacaton()}  >
                <DayHightlight today={today  === date} selectedDate={selectedDate === date} >
                    {day.format('D')}
                </DayHightlight>
                <Events>
                    {checkLeaves() && <Event type="leaves" /> }
                    {checkAbcense() && <Event type="absence" />}
                    {checkExceptions() && <Event type="exceptions" />} 
                </Events>
            </DayContainer>}
        </DayStyled>
    )
}
export default Day;