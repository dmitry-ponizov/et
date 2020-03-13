import { ListType } from '../../../../store/team/types';
export type Props = Readonly<IUsersMobileProps>

interface IUsersMobileProps {
    membersLoad: boolean;
    membersError: string | null;
    members: ListType | null;
    getTeamMembersAction: (url: string) => void;
    sessionId: string;
}