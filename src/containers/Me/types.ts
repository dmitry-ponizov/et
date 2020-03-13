import { RequestsType } from '../../store/requests/types';
import { ProcessedDataType } from '../../store/users/types';
export type Props =  Readonly<IMeProps>


interface IMeProps {
    authUserId: string;
    sessionId: string;
    getMeDataAction: (params: FormData) => void;
    user: {[index: string]: string};
    setCurrentPageAction: (page: string) => void;
    path: string;
    isLoading: boolean;
    error: string | null
    changeNewRequestStatus: (status: boolean) => void;
    editUserInfo: boolean;
    loading: boolean;
    errorEditUser: string | null;
    avatar: any
    userIdAttendance: string;
    getTimeSheetForMonthAction: (userId: string) => void;
    changeUserIdAttendanceAction: (id: string) => void
    fetchRequestsDataAction: (params: FormData) => void;
    requests: RequestsType[];
    changeAvatarAction: (avatar: FormData) => void
    setAvatarAction: (avatar: string) => void;
    editUserResetAction: () => void;
    editUserAction: (params: any) => void;
    requestsLoading: boolean;
    requestsError: string | null
    lang: string
    cancelRequestsAction: (params: FormData) => void;
    cancelRequestLoading: boolean;
    cancelRequestError: string | null;
    resetCancelRequestAction: () => void;
    getAvailableBalanceAction: (params: FormData) => void;
    availableBalance: {[index: string]: string}[] | null;
    isLoadingAvailableBalance: boolean;
    errorAvailableBalance: string | null;
    getProcessedDataAction: (params: { from: string, to: string, userId: string, sessionId: string }) => void;
    processedData: ProcessedDataType | null;
    loadingProcessedData: boolean;
    isLoadingCurrentUser: boolean;
}