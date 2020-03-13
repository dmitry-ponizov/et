export type Props = Readonly<LogoutProps>;

interface LogoutProps {
    logoutAction: () => void;
    path: string;
}
