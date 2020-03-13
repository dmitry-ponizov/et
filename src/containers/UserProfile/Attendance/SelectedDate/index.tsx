import React from 'react'
import { SelectedDateStyled, Triangle, LeavesIcon, AbsenceIcon, ExceptionIcon, Title, DateInfo } from './styled';
import { IconIn } from '../../../../components/UI/SvgIcons/icon-in';
import { IconOut } from '../../../../components/UI/SvgIcons/icon-out';
import Field from './Field';
import { Props } from './types';
import moment from 'moment-timezone';
import Exceptions from './Exceptions/index';
import { timeConverter } from '../../../../utils/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { PunchType } from '../../../../store/users/types';

const SelectedDate: React.FC<Props & InjectedIntlProps> = ({ selectedDayInfo, isSunday, intl, rtl, date }) => {

    const exceptions = <Exceptions exceptions={selectedDayInfo.exceptions} />

    const checkInOutValue = (value: any) => {
        if (typeof value === 'boolean' && !value) {
            return '-'
        } else {
            return moment(value).tz('Asia/Baghdad').format('LT')
        }
    }

    const checkTimeValue = (value: string | boolean) => {
        if (!value) return '-'
        return timeConverter(value)
    }
    const getTranslate = (message: string) => {
        return intl.formatMessage({ id: `global.${message}` })
    }

    const getPunchIcon = (type: string) => {
        return type === 'in' ? <IconIn /> : <IconOut />
    }

    return (
        <SelectedDateStyled isSunday={isSunday} rtl={rtl}>
            <Triangle isSunday={isSunday} rtl={rtl} />
            {selectedDayInfo &&
                <div>
                    <Title rtl={rtl}>{intl.formatMessage({ id: 'global.selected_date' })}</Title>
                    <DateInfo rtl={rtl}>{date}</DateInfo>
                    {selectedDayInfo.allPunches.map((punch: PunchType, index: number) =>
                        <Field
                            key={index}
                            icon={getPunchIcon(punch.status_name)}
                            title={getTranslate(punch.status_name)}
                            value={checkInOutValue(punch.time_stamp)}
                        />
                    )}
                    <Field icon={<LeavesIcon />} title={getTranslate('leaves')} value={checkTimeValue(selectedDayInfo.leavesTime)} />
                    <Field icon={<AbsenceIcon />} title={getTranslate('absence')} value={checkTimeValue(selectedDayInfo.absenceTime)} />
                    <Field icon={<ExceptionIcon />} type="exceptions" title={getTranslate('exceptions')} value={exceptions} rowDirection={Boolean(selectedDayInfo.exceptions.length)} />
                </div>
            }
        </SelectedDateStyled>
    )
}
export default injectIntl(SelectedDate);