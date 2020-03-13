export type Props = Readonly<ITeamInfoBlockProps>


interface ITeamInfoBlockProps {
    title: string;
    icon: object;
    value: number;
    color: string;
    clickHandler?: () => void 
}
