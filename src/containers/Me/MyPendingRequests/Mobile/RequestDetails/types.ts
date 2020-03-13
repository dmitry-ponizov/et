export type Props = Readonly<IRequestDetailsProps>

interface IRequestDetailsProps {
    request: {[index: string]: any};
    backHandler: () => void;
    cancelRequestsAction: (params: FormData) => void;
    sessionId: string;
    isLoading: boolean;
    error: string | null;
    cancelSuccess: boolean;
    refreshData: () => void;
}