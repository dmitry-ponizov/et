export type Props = Readonly<IModalContentProps>


interface IModalContentProps {
    icon: object;
    status: string;
    message: string;
    accept: () => void
}