import { RequestsType } from '../../../store/requests/types';
export type Props = Readonly<IMyPendingRequestsProps>

interface IMyPendingRequestsProps {
    requests: RequestsType[];
    isLoading: boolean;
    error: string | null;
}
