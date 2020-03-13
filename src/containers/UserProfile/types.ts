import { ProcessedDataType } from '../../store/users/types';
import { ISubordinates } from "../../store/users/types";

export type Props = Readonly<UserTypes> ;

interface UserTypes {
    path: string
    user: {[index: string]: string};
    getUserDataAction: (params: FormData) => void;
    sessionId: string;
    setCurrentPageAction: (currentPage: string) => void;
    avatar: string;
    isLoading: boolean;
    error: string | null
    getAvailableBalanceAction: (params: FormData) => void;
    availableBalance: {[index: string]: string}[] | null;
    changeFilterDataAction: (payload: string[] | string, field: string) => void
    successNewRequestValidation: boolean;
    setNewRequestAction: () => void;
    resetValidateRequest: () => void;
    setUserIdAction: (id: string) => void
    getProcessedDataAction: (params: { from: string, to: string, userId: string, sessionId: string }) => void;
    processedData: ProcessedDataType | null;
    loadingProcessedData: boolean;
    lang: string;
    getSubordinatesAction: (userId: string, pageNumber: string, items: number) => void;
    subordinates: ISubordinates[];
    subordinatesLoading: boolean;
    id: string
    getTimeSheetForMonthAction: (id: string) => void;
    subordinatesError: string | null;
    isLoadingAvailableBalance: boolean;
    errorAvailableBalance: string | null;
    totalRows: string | null;
    currentPage: string | null;
    changeNewRequestStatus: (status: boolean) => void;
    createRequesStatus: boolean;
    createRequestError: string | null
    authUserId: string | null;
    createRequestLoading: boolean
    changeUserIdAttendanceAction: (id: string) => void;
    userIdAttendance: string;
}


export type State = Readonly<UserState>;

interface UserState {
  newRequestShow: boolean;
  fromDate: string;
  toDate: string;
  width: number;
}
