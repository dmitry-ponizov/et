export type Props = Readonly<RequestsProps>;

interface RequestsProps {
  path: string;
  setCurrentPageAction: (currentPage: string) => void;
  data: any;
  requestData: any;
  getGenericDataRequestsAction: (params: FormData) => void;
  isLoading: boolean;
  error: any | null;
  pager: any;
  sortRequests: (payload: any) => void;
  fetchRequestsDataAction: (params: FormData) => void;
  setGenericDataRequestsAction: (params: FormData) => void;
  refreshLoading: boolean;
  refreshRequests: (payload: boolean) => void;
  changePageNumberRequestsAction: (page: number) => void;
  sessionId: string;
  intl: any;
  sideBar: boolean;
  toggleSideBar: () => void; 
  setNewRequestAction: () => void;
  successNewRequestValidation: boolean;
  resetValidateRequest: () => void
  cancelRequestsAction: (params: FormData) => void;
  cancelRequestError: string | null;
  setNewRequestLoading: boolean
  cancelRequestLoading: boolean;
  getRequestAction: (params: FormData) => void;
  request: {[index: string]: string} | null;
  requestLoading: boolean,
  requestError: string | null;
  getAuthHistoryAction: (params: FormData) => void;
  authHistory: Array<any>;
  authHistoryLoading: boolean;
  authHistoryError: string | null;
  authUserId: string;
  lang: string
}


export type State = Readonly<RequestsState>;

interface RequestsState {
  sortField: any;
  width: any;
  viewRequest: boolean;
  requestIds: string[];
}
export type Dictionary = { [index: string]: string };
