export type Props = Readonly<IUserCardProps>

export type UserType = {full_name: string, start_date: string, end_date: string, id: string, employee_number: string }

interface IUserCardProps {
    user: UserType;
    clickHandler: (userId: string) => void;
    sessionId: string;
}
