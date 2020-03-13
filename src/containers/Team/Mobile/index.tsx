import React from 'react';
import { Props } from './types';
import HeaderWithLogo from '../../../components/UI/Mobile/HeaderWithLogo/index';
import { TeamMobileStyled, TeamMobileSection, TeamInfoBlocks, TeamInfoContent } from './styled';
import NavigationPanelMobile from '../../../components/UI/Mobile/NavigationPanel/index';
import InfoBlockTeamMobile from './InfoBlock/index';
import { IconTotalAttendanceMobile } from '../../../components/UI/SvgIcons/Team/icon-total-attendance';
import { IconTotalTeamMobile } from '../../../components/UI/SvgIcons/Team/icon-total-team';
import { IconPendingRequestsMobile } from '../../../components/UI/SvgIcons/Team/icon-pending-requests';
import { IconVacation } from '../../../components/UI/SvgIcons/icon-vacation';
import { IconExusedLeaves } from '../../../components/UI/SvgIcons/Team/icon-exused-leaves';
import { IconAbsenceMobile } from '../../../components/UI/SvgIcons/Team/icon-absense';
import { navigate } from '@reach/router';
import { PendingRequestsPath, TeamUsersPath, TeamTotalAttendancePath, EmployeesOnVacationPath, ExcusedLeavesTodayPath, AbsentEmployeesTodayPath } from '../../../routes/constants';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import ErrorComponent from '../../../components/UI/Error/index';

const TeamMobile: React.FunctionComponent<Props & InjectedIntlProps> = ({
  summary,
  employeesOnVacation,
  exusedLeaves,
  intl,
  error,
}) => {

  const getMessage = (key: string) => {
    return intl.formatMessage({ id: `team.${key}` })
  }
  return (
    <TeamMobileSection>
      <TeamMobileStyled>
        <HeaderWithLogo title={intl.formatMessage({ id: `global.team` })} bcg="transparent"  />
      </TeamMobileStyled>
      {summary && <TeamInfoContent>
        <TeamInfoBlocks>
          <InfoBlockTeamMobile clickHandler={() => navigate(TeamUsersPath)}  color="#c8ead6" title={getMessage('total_team_members')} value={summary.totalMembers} icon={<IconTotalTeamMobile />} />
          <InfoBlockTeamMobile  clickHandler={() => navigate(TeamTotalAttendancePath)} color="#c8ead6" title={getMessage('total_attendance_today')} value={summary.totalAttendanceToday} icon={<IconTotalAttendanceMobile />} />
          <InfoBlockTeamMobile clickHandler={() => navigate(PendingRequestsPath)} color="#c8ead6" title={getMessage('request_authtorizations')}  value={summary.pendingRequests} icon={<IconPendingRequestsMobile />} />
          <InfoBlockTeamMobile clickHandler={() => navigate(EmployeesOnVacationPath)}  color="#fff2c2" title={getMessage('employees_on_vacation')}  value={employeesOnVacation ? employeesOnVacation : 0} icon={<IconVacation />} />
          <InfoBlockTeamMobile clickHandler={() => navigate(ExcusedLeavesTodayPath)} color="#fff2c2" title={getMessage('exused_leaves_today')} value={exusedLeaves ? exusedLeaves : 0} icon={<IconExusedLeaves />} />
          <InfoBlockTeamMobile clickHandler={() => navigate(AbsentEmployeesTodayPath)} color="#ffdcdd" title={getMessage('absent_employees_today')} value={summary.absentEmployeesToday} icon={<IconAbsenceMobile />} />
        </TeamInfoBlocks>
      </TeamInfoContent>}
      {error ? <ErrorComponent error={error} /> : ''}
      {(summary || error) && <NavigationPanelMobile /> }
    </TeamMobileSection>
  );
};


export default injectIntl(TeamMobile);
