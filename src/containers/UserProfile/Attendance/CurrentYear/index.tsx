import React from 'react'
import { CurrentYearContainer, YearStyled, Buttons, Button } from './styled';
import moment from 'moment';
import { Props } from './types';
import { IconCalendarBlue } from '../../../../components/UI/SvgIcons/icon-calendar-blue';
import { IconPreviousArrow } from '../../../../components/UI/SvgIcons/icon-previous-arrow';
import { IconNextArrow } from '../../../../components/UI/SvgIcons/icon-next-arrow';

const CurrentYear: React.FC<Props> = ({ currentYear, currentMonth, setCurrentYearAction, lang }) => {
    const dec = () => {
        setCurrentYearAction(currentYear - 1)
    }
    const inc = () => {
        setCurrentYearAction(currentYear + 1)
    }
    const formattedDate = () => {
        return moment(`${currentYear}-${currentMonth}-1`, 'YYYY-M-D').locale(lang).format('YYYY');
    }
    return (
        <CurrentYearContainer>
            <IconCalendarBlue />
            <YearStyled>{formattedDate()}</YearStyled>
            <Buttons>
                <Button onClick={dec}>
                    <IconPreviousArrow />
                </Button>
                <Button onClick={inc}>
                    <IconNextArrow />
                </Button>
            </Buttons>
        </CurrentYearContainer>
    )
}

export default CurrentYear;