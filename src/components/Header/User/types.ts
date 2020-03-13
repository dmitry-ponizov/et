export type Props = Readonly<IUserHeaderProps>


interface IUserHeaderProps {
    user: {[index: string]: string};
    sessionId: string;
    avatar?: string
    rtl: boolean;
}