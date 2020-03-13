import * as React from 'react';
import { ProcessedDateStyled, Title, Date } from './styled';
import { IconCalendarBlue } from '../../../../../../components/UI/SvgIcons/icon-calendar-blue';
import { Props } from './types';
import moment from 'moment';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const ProcessedDate: React.FunctionComponent<Props & InjectedIntlProps> = ({ fromDate, toDate, showCalendar, intl, lang }) => {
    return (
        <ProcessedDateStyled>
            <div>
                <Title>{intl.formatMessage({ id: `global.show_processed_data` })}</Title>
                <Date>{`${moment(fromDate).locale(lang).format('DD MMM')} - ${moment(toDate).locale(lang).format('ll')}`}</Date>
            </div>
            <div onClick={showCalendar}>
                <IconCalendarBlue />
            </div>
        </ProcessedDateStyled>
    );
};

export default injectIntl(ProcessedDate);
