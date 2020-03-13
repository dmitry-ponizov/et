import { IUsersBirthday, TNewMembers } from '../../../../store/home/types';
export type Props = Readonly<INewMemberCardProps>

interface INewMemberCardProps {
    user: TNewMembers;
    sessionId: string;
    rtl: boolean;
    lang: string;
    lastId: any;
}