export type Props = Readonly<IMyPendingRequestsProps>

interface IMyPendingRequestsProps {
    data: any;
    fetchRequestsDataAction: (params: FormData) => void;
    isLoading: boolean;
    error: string | null;
    authUserId: string;
    sessionId: string;
    cancelRequestsAction: (params: FormData) => void;
    cancelRequestLoading: boolean;
    cancelRequestError: string | null;
    cancelSuccess: boolean;
    resetCancelRequestAction: () => void;
    id: string;
}