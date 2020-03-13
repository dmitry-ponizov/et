export type Props = Readonly<IRequestDetailsProps>

interface IRequestDetailsProps {
    request: {[index: string]: any};
    backHandler: () => void;
    approveDecline: (status: boolean) => void;
}