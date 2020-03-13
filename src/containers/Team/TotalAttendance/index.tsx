import React, { useEffect, Fragment } from 'react';
import { Props } from './types';
import {  Title } from './styled';
import Header from '../../../components/Header';
import { ContentBlock } from '../../../styledTheme/globalStyles';
import { TeamListCrumbs, totalAttendanceColumns } from '../constants';
import Breadcrumbs from '../../../components/UI/Breadcrumbs';
import { connected } from './connect';
import TableHeaderText from '../../../components/UI/Table/TableHeader/Text/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import MainContent from '../../../components/MainContent/index';
import { navigate } from '@reach/router';
import { useWindowSize } from '../../../hooks/index';
import { mobileResulution } from '../../../constants/common';
import TotalAttendanceMobile from './Mobile/index';
import TableData from '../TableData/index';


const TotalAttendance: React.FunctionComponent<Props & InjectedIntlProps> = ({
  getTotalAttendanceTodayAction,
  totalAttendance,
  intl,
  totalAttendanceLoading,
  totalAttendanceError,
  setCurrentPageAction,
  sessionId
}) => {
  const size = useWindowSize();
  const isMobile = size.width ? size.width < mobileResulution : false;

  useEffect(() => {
    setCurrentPageAction('/team')
    if (!totalAttendance) { getTotalAttendanceTodayAction('') }
  }, [getTotalAttendanceTodayAction, totalAttendance, setCurrentPageAction])

  const goToUserProfile = (userId: string) => {
    navigate(`/user/${userId}`)
  }
  const tableHeader = <TableHeaderText titleKey="users" columns={totalAttendanceColumns} />
  let tableBody: React.ReactElement[] | null = null;
  if (totalAttendance) {
      tableBody = totalAttendance.map((row: any, index: number) => (
          <TableData
              key={index}
              cells={row}
              fields={totalAttendanceColumns}
              clickRowHandler={goToUserProfile}
          />
      ));
  }
  return (
    <Fragment>
      {!isMobile ?
        <div>
          <Header isMobile={false} />
          <ContentBlock>
            <Breadcrumbs crumbs={TeamListCrumbs} lastCrumb={intl.formatMessage({ id: `team.total_attendance_today` })} />
            <Title>{intl.formatMessage({ id: `team.total_attendance_today` })}</Title>
            <MainContent
              tableBody={tableBody}
              tableHeader={tableHeader}
              isLoading={totalAttendanceLoading}
              error={totalAttendanceError}
              colspan={totalAttendanceColumns.length}
            />
          </ContentBlock>
        </div> : 
        <TotalAttendanceMobile 
          totalAttendance={totalAttendance}
          isLoading={totalAttendanceLoading}
          error={totalAttendanceError}
          sessionId={sessionId}
        />}
    </Fragment>
  );
};

export default connected(injectIntl(TotalAttendance));
