export type Props = Readonly<RequestsAuthProps>;

interface RequestsAuthProps {
  path: string;
  setCurrentPageAction: (currentPage: string) => void;
  sessionId: string;
  data: any;
  requestData: any;
  intl: any;
  isLoading: boolean;
  error: any | null;
  pager: any; 
  sortAuthRequest: (payload: any) => void;
  fetchRequestAuthDataAction: (url: string) => void;
  refreshLoading: boolean;
  refreshAuthRequest: (payload: boolean) => void;
  changePageNumberAuthRequestAction: (page: number) => void;
  request: {[index: string]: string} | null;
  requestLoading: boolean,
  requestError: string | null;
  getRequestAction: (params: FormData) => void;
  authtorizeRequestAction: (params: FormData, status: boolean) => void;
  authtorizationLoading: boolean;
  id: string;
  changeFilterDataAction: (payload: string[] | string, field: string) => void;
  user: {[index: string]: string};
  changeUserIdPendingRequestsAction: (userId: string) => void; 
  currentUser: any;
  approved: boolean;
  declined: boolean;
  approveDeclineError: string | null
  resetAutorizeAction: () => void;
  authUserId: string
  pendingRequestUserId: string;
  lang: string;
}


export type State = Readonly<RequestsAuthState>;

interface RequestsAuthState {
  requestIds: string[];
  sortField: any;
  viewRequest: boolean;
  width: number
}

export type Dictionary = { [index: string]: string };
