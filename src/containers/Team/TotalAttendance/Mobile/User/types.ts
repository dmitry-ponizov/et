export type Props = Readonly<IUserCardProps>

export type UserType = {employee_number: string, full_name: string, time_stamp: string, id: string }

interface IUserCardProps {
    user: UserType;
    clickHandler: (userId: string) => void;
    sessionId: string;
}
