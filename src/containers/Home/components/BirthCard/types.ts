import { IUsersBirthday } from '../../../../store/home/types';
export type Props = Readonly<IBirthCardProps>

interface IBirthCardProps {
    user: IUsersBirthday
    sessionId: string;
    rtl: boolean;
    lang: string;
}