export type Props = Readonly<INavigationItemProps>

interface INavigationItemProps {
    icon: object;
    name: string;
    path: string;
    active: boolean;
}
