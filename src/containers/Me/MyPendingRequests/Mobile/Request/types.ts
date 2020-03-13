export type Props = Readonly<IPendingRequestProps>

interface IPendingRequestProps {
    request: {[index: string]: any};
    selectRequest: (request: {[index: string]: any}) => void;
}