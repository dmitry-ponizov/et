import { IUsersBirthday, TNewMembers } from '../../store/home/types';
export type Props = Readonly<IHome>

interface IHome {
    setCurrentPageAction: (path: string) => void;
    path: string;
    fetchUsersWithBirthdayAction: () => void;
    birthdays: IUsersBirthday[] | null;
    sessionId: string;
    lang: string;
    newMembers: TNewMembers[] | null;
    fetchNewMembersAction: () => void;
    loadingBirthdays: boolean;
    errorBirthDays: string | null;
    loadingNewMembers: boolean;
    errorNewMembers: string | null;
}