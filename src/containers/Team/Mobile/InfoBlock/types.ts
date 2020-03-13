export type Props = Readonly<IInfoBlockTeamMobileProps>

interface IInfoBlockTeamMobileProps {
    color: string;
    title: string;
    value: number;
    icon: object;
    clickHandler: () => void;
}