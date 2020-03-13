import * as React from 'react';
import { Props } from './types';
import moment from 'moment';
import { YearSelectStyled, YearStyled } from './styled';
import { IconRightArrowYear } from '../../../../../../components/UI/SvgIcons/icon-right-arrow-year';
import { IconLeftArrowYear } from '../../../../../../components/UI/SvgIcons/icon-left-arrow-year';


const YearSelect: React.FunctionComponent<Props> = ({ currentYear, currentMonth, setCurrentYearAction, lang }) => {
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
        <YearSelectStyled>
            <div onClick={dec}><IconLeftArrowYear /></div>
            <YearStyled>{formattedDate()}</YearStyled>
            <div onClick={inc}><IconRightArrowYear /></div>
        </YearSelectStyled>
    );
};

export default YearSelect;
