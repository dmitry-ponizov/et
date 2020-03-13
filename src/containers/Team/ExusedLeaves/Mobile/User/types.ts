export type Props = Readonly<IUserCardProps>

export type UserType = {full_name: string, absence_policy_name: string, id: string, employee_number: string }

interface IUserCardProps {
    user: UserType;
    clickHandler: (userId: string) => void;
    sessionId: string;
}
