import React from 'react'
import { SelectedDateStyled, VacationsIcon, LeavesIcon, AbsenceIcon, ExceptionIcon, SelectedDateContainer } from './styled';
import { IconIn } from '../../../../../../components/UI/SvgIcons/icon-in';
import { IconOut } from '../../../../../../components/UI/SvgIcons/icon-out';
import Field from './Field';
import { Props } from './types';
import moment from 'moment-timezone';
import Exceptions from './Exceptions/index';
import { timeConverter } from '../../../../../../utils/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';

const SelectedDate: React.FC<Props & InjectedIntlProps> = ({ selectedDayInfo, vacations, intl }) => {

    const exceptions = <Exceptions exceptions={selectedDayInfo.exceptions} />

    const checkInOutValue = (value: any) => {
        if(typeof value === 'boolean' && !value) {
            return '-'
        } else {
            return moment(value).tz('Asia/Baghdad').format('LT')
        }
    }

    const checkVacation = () => {
        if(!vacations.length) return '-'
        if(vacations.length === 1)  return vacations.length + ' day'
        return vacations.length + ' days'
    }
    const checkTimeValue = (value: string | boolean) => {
        if(!value) return '-'
        return timeConverter(value)
    }
    const getTranslate = (message: string) => {
        return intl.formatMessage({ id: `global.${message}` }) 
    }
    return (
        <SelectedDateStyled>
            {selectedDayInfo &&
                <SelectedDateContainer>
                    <Field icon={<IconIn />} title={getTranslate('in')} value={checkInOutValue(selectedDayInfo.inPunch)} />
                    <Field icon={<IconOut />} title={getTranslate('out')} value={checkInOutValue(selectedDayInfo.outPunch)} />
                    <Field icon={<VacationsIcon />} title={getTranslate('vacation')} value={checkVacation()} />
                    <Field icon={<LeavesIcon />} title={getTranslate('leaves')} value={checkTimeValue(selectedDayInfo.leavesTime)} />
                    <Field icon={<AbsenceIcon />} title={getTranslate('absence')} value={checkTimeValue(selectedDayInfo.absenceTime)} />
                    <Field icon={<ExceptionIcon />} title={getTranslate('exceptions')} value={exceptions} />
                </SelectedDateContainer>
            }
        </SelectedDateStyled>
    )
}
export default injectIntl(SelectedDate);