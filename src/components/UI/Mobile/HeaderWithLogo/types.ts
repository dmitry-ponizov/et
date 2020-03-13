import { CommonType } from '../../../../constants/common';
export type Props = Readonly<HeaderProps>;

interface HeaderProps {
  getCurrentUserAction: (params: FormData) => void;
  currentUser: {[index: string]: string}
  sessionId: string;
  mobileTitle?: string;
  currentPage: string;
  successNewRequestValidation: boolean;
  setNewRequestAction: () => void;
  changeNewRequestStatus: (status: boolean) => void;
  createRequesStatus: boolean;
  createRequestError: string | null;
  createRequestLoading: boolean;
  authUserId: string
  resetValidateRequest: () => void;
  title: string
  bcg: string;
  getStationIdAction: () => void;
  stationId: string;
  createPunchStatus: boolean;
  createPunchLoading: boolean;
  createPunchError: string | null;
  changePunchStatusAction: () => void;
  getPermissionsAction: () => void;
  permissions: CommonType | null
}
