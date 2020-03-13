export type Props = Readonly<ISortHeaderProps>


interface ISortHeaderProps {
    title: string;
    backHandler: () => void;
    actionHandler?: () => void;
    actiontitle?: string | object
}