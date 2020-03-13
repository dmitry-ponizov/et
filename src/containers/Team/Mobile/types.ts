import { TeamSummary } from '../../../store/team/types';
export type Props = Readonly<ITeamMobileProps>

interface ITeamMobileProps {
    summary: TeamSummary | null;
    employeesOnVacation: number | null;
    exusedLeaves: number | null;
    error: string | null;
}