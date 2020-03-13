import React  from 'react'
import { AttendanceContainer, Title, Header, RightPanel, ResetButton, CalendarContainer} from './styled';
import { connected } from './connect';
import CurrentMonth from './CurrentMonth/index';
import { Props } from './types';
import CurrentYear from './CurrentYear/index';
import InfoBlock from './InfoBlock/index';
import Calendar from './Calendar/index';
import LoaderComponent from '../../../components/UI/Loader/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { getCurrentMonth } from '../../../utils/index';

const Attendance: React.FC<Props & InjectedIntlProps> = ({
    selectedDate,
    selectDateAction,
    getTimeSheetForMonthAction,
    userIdAttendance,
    setCurrentMonthAction,
    setCurrentYearAction,
    resetCalendarDataAction,
    currentMonth,
    currentYear,
    lang,
    intl,
    loadingCalendarData,
    codes,
    weeks,
    calendarData
}) =>  {

    const selectDayHandler = (date: string) => {
        let newDate = ''
        if(selectedDate !== date) {
            newDate = date;
        }
        selectDateAction(newDate)
    }

    const getCalendarData = () => {
        getTimeSheetForMonthAction(userIdAttendance)
    }
    

    const selectMonth = (month: number) => {
        setCurrentMonthAction(month)
        getCalendarData()
    }
    

    const selectYear = (year: number) => {
        setCurrentYearAction(year)
        getCalendarData()
    }

    const resetCalendarData = () => {
        resetCalendarDataAction()
        if(getCurrentMonth() !== currentMonth) {
            getCalendarData()
        }
    }
    return (
        <AttendanceContainer>
            <Header>
                <Title>{intl.formatMessage({ id: `global.attendance` })}</Title>
                <RightPanel>
                    <ResetButton onClick={resetCalendarData}>{intl.formatMessage({ id: `global.reset` })}</ResetButton>
                    <CurrentMonth 
                        currentMonth={currentMonth} 
                        currentYear={currentYear} 
                        setCurrentMonthAction={selectMonth}
                        setCurrentYearAction={setCurrentYearAction} 
                        lang={lang}
                    />
                    <CurrentYear 
                        currentMonth={currentMonth} 
                        currentYear={currentYear} 
                        setCurrentYearAction={selectYear} 
                        lang={lang}
                    />
                </RightPanel>  
            </Header>
           <InfoBlock selectedDate={selectedDate} codes={codes} lang={lang} />
           <CalendarContainer>
                <Calendar  
                    weeks={weeks} 
                    selectDayHandler={selectDayHandler} 
                    currentMonth={currentMonth} 
                    selectedDate={selectedDate}
                    calendarData={calendarData}
                    lang={lang}
                />
           </CalendarContainer>
           {loadingCalendarData && <LoaderComponent margin="200px" />}
        </AttendanceContainer>
    )
    
}

export default injectIntl(connected(Attendance));