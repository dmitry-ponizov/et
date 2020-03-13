export type Props = Readonly<IInfoBlockProps>

interface IInfoBlockProps {
    from: any;
    to: any;
    handleResetClick: () => void;
    lang: string;
}
