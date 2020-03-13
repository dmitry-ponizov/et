import React from 'react'
import { Props } from './types';
import { DayStyled, DayHightlight, DayContainer, Block, BlockRight, ExceptionsIcons, VacationStyled, DayWithVacation } from './styled';
import moment from 'moment';
import { IconIn } from '../../../../../components/UI/SvgIcons/icon-in';
import { IconOut } from '../../../../../components/UI/SvgIcons/icon-out';
import { timeConverter, isRtl } from '../../../../../utils/index';
import { LeavesIcon } from '../../SelectedDate/styled';
import CalendarField from './Field/index';
import { AbsenceIcon, ExceptionIcon } from '../../../Mobile/Screens/Attendance/SelectedDate/styled';
import DynamicIcon from '../../SelectedDate/DynamicIcon';
import SelectedDate from '../../SelectedDate';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { PunchType } from '../../../../../store/users/types';

const Day: React.FC<Props & InjectedIntlProps> = ({ day, selectDayHandler, selectedDate, currentMonth, calendarData, lang, intl }) => {
    const today = moment().format("YYYY-MM-DD");
    const date = day.format("YYYY-MM-DD");
    const dayData = calendarData[date];
    const currentMonthDay = currentMonth === parseInt(day.format('M'))
    const rtl = isRtl(lang)

    const selectDay = () => {
        if (currentMonth === parseInt(day.format('M'))) {
            selectDayHandler(date)
        }
    }

    const isVacation = () => {
        if (!dayData || !dayData.isVacation) return
        return dayData.isVacation;
    }

    const checkExceptions = () => {
        if (!dayData || !Boolean(dayData.exceptions.length)) {
            return false
        }
        return true;
    }
    const checkAbcense = () => {
        if (!dayData || !dayData.absenceTime) {
            return false
        }
        return true;
    }

    const checkLeaves = () => {
        if (!dayData || !dayData.leavesTime) {
            return false
        }
        return true;
    }

    const checkInOutValue = (value: boolean | string) => {
        if (typeof value === 'string') {
            return moment(value).tz('Asia/Baghdad').format('LT')
        }
        return null
    }

    const checkTimeValue = (value: number | null) => {
        if (!value) return '-'
        return timeConverter(value)
    }
    const exceptions = checkExceptions() && (dayData.exceptions.map((exception: { code: string, description: string }) => exception.code)).join(', ');

    const isSunday = () => {
        return day.weekday() === 6 ? true : false
    }
    
    const getPunchIcon = (type: string) => {
        return type === 'in' ? <IconIn /> : <IconOut />
    }

    return (
        <DayStyled today={today === date} selectedDate={selectedDate === date} >
            <DayContainer onClick={selectDay} >
                {!isVacation() ? <>
                    <Block>
                        <DayHightlight today={today === date} selectedDate={selectedDate === date} currentMonthDay={currentMonthDay}>
                            {day.format('D')}
                        </DayHightlight>
                        <ExceptionsIcons>
                            {checkExceptions() &&
                                dayData.exceptions.map((exception: { code: string, description: string }, index: number) =>
                                    <DynamicIcon key={index} tag={exception.code} />)}
                        </ExceptionsIcons>
                    </Block>
                    {currentMonthDay && dayData && today >= date &&
                        <BlockRight>
                            {dayData.allPunches.map((punch: PunchType, index: number) => 
                                <CalendarField 
                                    key={index}
                                    isData={Boolean(dayData)} 
                                    value={checkInOutValue(punch.time_stamp)} 
                                    icon={getPunchIcon(punch.status_name)} 
                                />
                             )}
                            <CalendarField isData={checkLeaves()} value={checkTimeValue(dayData.leavesTime)} icon={<LeavesIcon />} />
                            <CalendarField isData={checkAbcense()} value={checkTimeValue(dayData.absenceTime)} icon={<AbsenceIcon />} />
                            <CalendarField isData={checkExceptions()} value={exceptions} icon={<ExceptionIcon />} />
                        </BlockRight>}
                </> :
                    <DayWithVacation>
                        <DayHightlight today={today === date} selectedDate={selectedDate === date} currentMonthDay={currentMonthDay}>
                            {day.format('D')}
                        </DayHightlight>
                        <VacationStyled>
                            {intl.formatMessage({ id: 'global.vacation' })}
                        </VacationStyled>
                    </DayWithVacation>}
            </DayContainer>
            {dayData && selectedDate === date &&
                <SelectedDate
                    selectedDayInfo={dayData}
                    isSunday={isSunday()}
                    rtl={rtl}
                    date={moment(day).locale(lang).format('dddd, ll')}
                />
            }
        </DayStyled>
    )
}
export default injectIntl(Day);