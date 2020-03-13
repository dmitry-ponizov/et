export type Props = Readonly<ITitleWithSearchProps>


interface ITitleWithSearchProps {
    placeholder: string;
    findHandler: (query: string) => void;
    onCancel: () => void;
    title: string;
}