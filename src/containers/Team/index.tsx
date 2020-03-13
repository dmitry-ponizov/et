import React, { useEffect, Fragment } from 'react';
import { Props } from './types';
import { TeamStyled, TeamSection, TeamInfoBlocks, TeamUsers, SearchContainer, TeamTitle, TeamMembersHeader } from './styled';
import Header from '../../components/Header';
import { ContentBlock } from '../../styledTheme/globalStyles';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import { TeamCrumbs, displayColumns } from './constants';
import TeamInfoBlock from './InfoBlock/index';
import { IconTotalTeam } from '../../components/UI/SvgIcons/icon-total-team';
import { IconTeamPendingRequests } from '../../components/UI/SvgIcons/icon-team-pending-requests';
import { IconVacation } from '../../components/UI/SvgIcons/icon-vacation';
import { IconAbsence } from '../../components/UI/SvgIcons/icon-absense';
import { connected } from './connect';
import LoaderComponent from '../../components/UI/Loader/index';
import ErrorComponent from '../../components/UI/Error/index';
import { IconAttandanceTeam } from '../../components/UI/SvgIcons/icon-attendance';
import { IconExcusedTeam } from '../../components/UI/SvgIcons/icon-excused';
import theme from '../../styledTheme/theme';
import Search from '../../components/UI/Mobile/Header/Search/index';
import MainContent from '../../components/MainContent';
import TableData from './TableData';
import TableHeaderText from '../../components/UI/Table/TableHeader/Text/index';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { navigate } from '@reach/router';
import {
    TeamTotalAttendancePath,
    EmployeesOnVacationPath,
    ExcusedLeavesTodayPath,
    AbsentEmployeesTodayPath,
    PendingRequestsPath
} from '../../routes/constants';
import { mobileResulution } from '../../constants/common';
import { useWindowSize } from '../../hooks/index';
import TeamMobile from './Mobile/index';

const Team: React.FunctionComponent<Props & InjectedIntlProps> = ({
    getTeamInfoAction,
    summary,
    isLoading,
    error,
    getTeamMembersAction,
    members,
    membersLoad,
    membersError,
    intl,
    setCurrentPageAction,
    path,
    employeesOnVacation,
    exusedLeaves,
    getEmployeesOnVacationAction,
    getExusedLeavesAction,
    exusedLeavesLoading
}) => {
    const size = useWindowSize();
    const isMobile = size.width ? size.width < mobileResulution : false;

    useEffect(() => {
        setCurrentPageAction(path)
        if (!summary) { getTeamInfoAction() }
    }, [getTeamInfoAction, summary, setCurrentPageAction, path])

    useEffect(() => {
        if (!members && !isMobile) { getTeamMembersAction('') }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getTeamMembersAction, isMobile])

    useEffect(() => {
        if (!employeesOnVacation) { getEmployeesOnVacationAction() }
    }, [getEmployeesOnVacationAction, employeesOnVacation])


    useEffect(() => {
        if (exusedLeaves === null && !exusedLeavesLoading) { getExusedLeavesAction() }
              // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sortHandler = () => { }

    const goToUserProfile = (userId: string) => {
        navigate(`/user/${userId}`)
    }

    const tableHeader = <TableHeaderText titleKey="users" sortHandler={sortHandler} columns={displayColumns} />

    let tableBody: React.ReactElement[] | null = null;
    if (members) {
        tableBody = members.map((row: any, index: number) => (
            <TableData
                key={index}
                cells={row}
                fields={displayColumns}
                clickRowHandler={goToUserProfile}
            />
        ));
    }
  
    const findHandler = (query: string) => {
        getTeamMembersAction(`&search=${query}`);
    }

    const onCancel = () => {
        getTeamMembersAction('')
    }

    return (
        <Fragment>
            {!isMobile && summary ?
                <TeamStyled>
                    <Header  isMobile={false} />
                    <ContentBlock>
                        <TeamSection>
                            <Breadcrumbs crumbs={TeamCrumbs} lastCrumb={intl.formatMessage({ id: `global.team`})} />
                            <TeamInfoBlocks>
                                <TeamInfoBlock icon={<IconTotalTeam />} title={intl.formatMessage({ id: `team.total_team_members`})} value={summary.totalMembers} color={theme.colors.green} />
                                <TeamInfoBlock clickHandler={() => navigate(TeamTotalAttendancePath)} icon={<IconAttandanceTeam />} title={intl.formatMessage({ id: `team.total_attendance_today`})} value={summary.totalAttendanceToday} color={theme.colors.green} />
                                <TeamInfoBlock clickHandler={() => navigate(PendingRequestsPath)} icon={<IconTeamPendingRequests />} title={intl.formatMessage({ id: `team.request_authtorizations`})} value={summary.pendingRequests} color={theme.colors.green} />
                                <TeamInfoBlock clickHandler={() => navigate(EmployeesOnVacationPath)} icon={<IconVacation />} title={intl.formatMessage({ id: `team.employees_on_vacation`})} value={employeesOnVacation ? employeesOnVacation : 0} color={theme.colors.orange} />
                                <TeamInfoBlock clickHandler={() => navigate(ExcusedLeavesTodayPath)} icon={<IconExcusedTeam />} title={intl.formatMessage({ id: `team.exused_leaves_today`})}  value={exusedLeaves ? exusedLeaves : 0} color={theme.colors.orange} />
                                <TeamInfoBlock clickHandler={() => navigate(AbsentEmployeesTodayPath)} icon={<IconAbsence />} title={intl.formatMessage({ id: `team.absent_employees_today`})}value={summary.absentEmployeesToday} color={theme.colors.red} />
                            </TeamInfoBlocks>
                            {isLoading ? <LoaderComponent margin="100px" /> : ''}
                        </TeamSection>
                        <TeamUsers>
                            <TeamMembersHeader>
                                <TeamTitle>{intl.formatMessage({ id: `global.team`})}</TeamTitle>
                                <SearchContainer>
                                    <Search placeholder={intl.formatMessage({ id: `users.find_employee`})} findHandler={findHandler} onCancel={onCancel} />
                                </SearchContainer>
                            </TeamMembersHeader>
                            <MainContent
                                tableBody={tableBody}
                                tableHeader={tableHeader}
                                isLoading={membersLoad}
                                error={membersError}
                                colspan={displayColumns.length}
                            />
                        </TeamUsers>
                    </ContentBlock>
                </TeamStyled > : ''}
            {isMobile && 
                <TeamMobile
                    summary={summary}
                    employeesOnVacation={employeesOnVacation}
                    exusedLeaves={exusedLeaves}
                    error={error}
                />}
            { isLoading ? <LoaderComponent margin="300px" /> : ''}
            {error && !isLoading && !isMobile ? <ErrorComponent error={error} /> : ''}
        </Fragment>
    );
};

export default connected(injectIntl(Team));