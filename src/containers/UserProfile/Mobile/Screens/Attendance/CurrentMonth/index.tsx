import React, { useState } from 'react'
import { CurrentMonthContainer, MonthStyled, Buttons, Button, CurrentMonthSection, DropdownMenu, CurrentMontBlock, DropdownItem, IconStyled } from './styled';
import moment from 'moment';
import { Props } from './types';
import { IconCalendarBlue } from '../../../../../../components/UI/SvgIcons/icon-calendar-blue';
import { IconNextArrow } from '../../../../../../components/UI/SvgIcons/icon-next-arrow';
import { IconPreviousArrow } from '../../../../../../components/UI/SvgIcons/icon-previous-arrow';
import { months } from '../../../../../../constants/common';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { IconCheck } from '../../../../../../components/UI/SvgIcons/icon-check';

const CurrentMonth: React.FC<Props & InjectedIntlProps> = ({ currentYear, currentMonth, setCurrentMonthAction, setCurrentYearAction, lang, intl }) => {
    const [showMonths, showMonthsHandler] = useState(false)
    const dec = () => {
        if (currentMonth === 1) {
            setCurrentMonthAction(12)
            setCurrentYearAction(currentYear - 1)
        } else {
            setCurrentMonthAction(currentMonth - 1)
        }
    }
    const inc = () => {
        if (currentMonth === 12) {
            setCurrentMonthAction(1)
            setCurrentYearAction(currentYear + 1)
        } else {
            setCurrentMonthAction(currentMonth + 1)
        }
    }

    const formattedDate = () => {
        return moment(`${currentYear}-${currentMonth}-1`, 'YYYY-M-D').locale(lang).format('MMMM');
    }
    const clickCurrentMonth = () => {
        showMonthsHandler(!showMonths)
    }

    const clickMonth = (month: number) => {
        setCurrentMonthAction(month + 1)
        showMonthsHandler(false)
    }

    return (
        <CurrentMonthSection>
            <CurrentMonthContainer >
                <CurrentMontBlock onClick={clickCurrentMonth} >
                    <IconCalendarBlue />
                    <MonthStyled >{formattedDate()}</MonthStyled>
                </CurrentMontBlock>
                <Buttons>
                    <Button onClick={dec}>
                        <IconPreviousArrow />
                    </Button>
                    <Button onClick={inc}>
                        <IconNextArrow />
                    </Button>
                </Buttons>
            </CurrentMonthContainer>
            {showMonths &&
                <DropdownMenu>
                    {months.map((month: string, index: number) => (
                        <DropdownItem key={month} active={index === currentMonth -1}  onClick={() => clickMonth(index)}>
                            <IconStyled>
                               {index === currentMonth -1 && <IconCheck />} 
                            </IconStyled>
                            {intl.formatMessage({ id: `months.${month}`})}
                        </DropdownItem>
                    ))}
                </DropdownMenu>}
        </CurrentMonthSection>
    )
}


export default injectIntl(CurrentMonth);