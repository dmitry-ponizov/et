import React, { useState, useEffect } from 'react';
import { ProcessedDataStyled, ProcessedDataSection } from './styled';
import Header from '../../../../../components/Header';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import ProcessedDate from './ProcessedDate';
import ProcessedCard from './ProcessedCard';
import { IconWorkHours } from '../../../../../components/UI/SvgIcons/icon-work-hours';
import { IconExcuseLeave } from '../../../../../components/UI/SvgIcons/icon-exuse-leave';
import { IconAbsenceDays } from '../../../../../components/UI/SvgIcons/icon-absence-days';
import { IconVacations } from '../../../../../components/UI/SvgIcons/icon-vacations';
import { Props } from './types';
import { connected } from './connect'
import { navigate } from '@reach/router';
import CalendarProcessedData from './Calendar';
import { firstDayForMonthDateFormat, formatMonthTitle, timeConverter } from '../../../../../utils/index';
import LoaderComponent from '../../../../../components/UI/Loader/index';
import { mobileResulution } from '../../../../../constants/common';


const ProcessedDataMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
  intl,
  processedData,
  id,
  getProcessedDataAction,
  sessionId,
  isLoading,
  lang
}) => {
  const [from, setFrom] = useState(firstDayForMonthDateFormat())
  const [to, setTo] = useState(new Date())
  const [showCalendar, toggleCalendar] = useState(false)

  useEffect(() => {
    if(window.innerWidth >= mobileResulution) {
      navigate(`/user/${id}`)
    }
    getProcessedDataAction({ from: formatMonthTitle(from), to: formatMonthTitle(to), userId: id, sessionId })
  }, [getProcessedDataAction, id, from, to, sessionId])

  const periodHandler = async (from: Date, to: Date) => {
    await setFrom(from)
    await setTo(to)
    await toggleCalendar(false)
    await getProcessedDataAction({ from: formatMonthTitle(from), to: formatMonthTitle(to), userId: id, sessionId })
  }

  return (
    <ProcessedDataStyled>
      <Header isMobile={true} mobileTitle={intl.formatMessage({ id: `global.attendance_kpis` })}  />
      {!showCalendar && <ProcessedDate toDate={to} fromDate={from} showCalendar={() => toggleCalendar(true)}  lang={lang} />}
      {processedData && !showCalendar &&
        <ProcessedDataSection>
          <ProcessedCard icon={<IconWorkHours />} title={intl.formatMessage({ id: `global.working_hours` })} value={timeConverter(processedData.working_seconds)} />
          <ProcessedCard icon={<IconExcuseLeave />} title={intl.formatMessage({ id: `global.excuse_leaves` })} value={processedData.leaves_count} />
          <ProcessedCard icon={<IconAbsenceDays />} title={intl.formatMessage({ id: `global.absence_days` })}  value={processedData.absence_count} />
          <ProcessedCard icon={<IconVacations />} title={intl.formatMessage({ id: `global.vacations` })} value={processedData.vacation_count} />
        </ProcessedDataSection>}
      {showCalendar && <CalendarProcessedData applyPeriod={periodHandler} lang={lang} />}
      {isLoading && <LoaderComponent margin="200px" />}
    </ProcessedDataStyled>
  );
};

export default injectIntl(connected(ProcessedDataMobile));
