import React from 'react'
import { CalendarStyled, DayBar, WeekDay, DaysStyled, CalendarContainer } from './styled';
import { weekDays } from '../../constants';
import { Props } from './types';
import Week from './Week/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const Calendar: React.FC<Props & InjectedIntlProps> = ({ weeks, selectDayHandler, selectedDate, currentMonth, calendarData, intl, lang }) => {
    return (
        <CalendarStyled>
            <CalendarContainer>
                <DayBar>
                    {weekDays.map((wday: string) => <WeekDay key={wday}>{intl.formatMessage({ id: `week.${wday}`})}</WeekDay>)}
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
                        lang={lang}
                    />)}
                </DaysStyled>
            </CalendarContainer>
        </CalendarStyled>
    )
}

export default injectIntl(Calendar);