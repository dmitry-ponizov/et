import { CommonType } from '../../constants/common';
export type Props = Readonly<HeaderProps>;

interface HeaderProps {
  isMobile: boolean;
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
  setUserIdAction: (id: string) => void;
  avatar: string;
  getStationIdAction: () => void;
  stationId: string;
  createPunchStatus: boolean;
  createPunchLoading: boolean;
  createPunchError: string | null;
  changePunchStatusAction: () => void;
  lang: string;
  getPermissionsAction: () => void;
  permissions: CommonType | null;
  currentUserError: null | string;
}

export type THeaderStyled = {theme: CommonType, isMobile: boolean}