import React, { useEffect } from 'react';
import { AttendanceStyled, SliderContainer, CalendarBlock, MainContent, CalendarSection, SelectedDateSection, SelectedDateBlock, ErrorCodesSection, ErrorCodesBlock } from './styled';
import MonthsSlider from './MonthSlider/index';
import { useWindowSize} from '../../../../../hooks/index';
import { connected } from './connect';
import { isRtl, codesHandler } from '../../../../../utils/index';
import { Props } from './types';
import { navigate } from '@reach/router';
import HeaderSection from './HeaderSection/index';
import moment from 'moment';
import LoaderComponent from '../../../../../components/UI/Loader/index';
import SelectedDate from './SelectedDate';
import Errors from './Errors/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import HeaderMobile from '../../../../../components/UI/Mobile/Sort/Header';
import YearSelect from './YearSelect';
import Calendar from './Calendar/index';

const UserAttendance: React.FunctionComponent<Props & InjectedIntlProps> = ({
  lang, 
  currentMonth, 
  user, 
  setCurrentMonthAction, 
  getTimeSheetForMonthAction, 
  id,
  weeks,
  selectedDate,
  calendarData,
  loadingCalendarData,
  selectDateAction,
  selectedDayInfo,
  vacations,
  codes,
  intl,
  userIdAttendance,
  changeUserIdAttendanceAction,
  currentYear,
  setCurrentYearAction
}) => {

  useEffect(() => {
    if((!Boolean(Object.keys(user).length))) {
      navigate(`/user/${id}`)
    }
  },[user,id])


  useEffect(() => {
    if(id !== userIdAttendance) {
      getTimeSheetForMonthAction(id)
      changeUserIdAttendanceAction(id)
    }
  },[id, getTimeSheetForMonthAction, changeUserIdAttendanceAction, userIdAttendance])

  const size = useWindowSize();

  const changeMonthHandler =  (month: number) => {
     setCurrentMonthAction(month)
     getTimeSheetForMonthAction(user.id)
  }
  const selectDayHandler = (date: string) => {
    selectDateAction(date)
  }

  const selectYearHandler = (year: number) => {
    setCurrentYearAction(year)
    getTimeSheetForMonthAction(userIdAttendance)
  }

  const backHandler = () => {
    window.history.go(-1)
}

  const yearSelect = <YearSelect currentMonth={currentMonth} currentYear={currentYear} setCurrentYearAction={selectYearHandler} lang={lang}/>
  
  return (
      <AttendanceStyled>
        <HeaderMobile
                title={intl.formatMessage({ id: `global.attendance` })}
                backHandler={backHandler}
                actiontitle={yearSelect}
            />
          <SliderContainer width={size.width} >
             <MonthsSlider isRtl={isRtl(lang)} initialSlide={currentMonth - 1} changeMonth={changeMonthHandler} />      
          </SliderContainer>
          <MainContent>
            <CalendarSection>
              <HeaderSection title={intl.formatMessage({ id: `global.today` })} value={moment().locale(lang).format('dddd, ll')}  />
              <CalendarBlock>
                <Calendar 
                    weeks={weeks} 
                    selectDayHandler={selectDayHandler} 
                    currentMonth={currentMonth} 
                    selectedDate={selectedDate}
                    calendarData={calendarData}
                />
              </CalendarBlock>
            </CalendarSection>
            <SelectedDateSection>
              <HeaderSection title={intl.formatMessage({ id: `global.selected_date` })} value={selectedDate && moment(selectedDate).locale(lang).format('dddd, ll')} />
              <SelectedDateBlock>
                <SelectedDate selectedDayInfo={selectedDayInfo} vacations={vacations} />
              </SelectedDateBlock>
            </SelectedDateSection>
            {codes && Boolean(codes.length) && 
            <ErrorCodesSection>
              <HeaderSection title={intl.formatMessage({ id: `global.errors_codes` })} value={codesHandler(codes)} />
              <ErrorCodesBlock>
                <Errors  selectedDayInfo={selectedDayInfo} />
              </ErrorCodesBlock>
            </ErrorCodesSection>}
          </MainContent>
          {loadingCalendarData && <LoaderComponent margin="200px" />}
      </AttendanceStyled>
  );
};


export default connected(injectIntl(UserAttendance));
