export type Props = Readonly<IRequestButtonProps>


interface IRequestButtonProps {
    icon: object;
    title: string;
    clickHandler: () => void;
}