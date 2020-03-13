export type Props = Readonly<HeaderProps>;

interface HeaderProps {
  icons?: object;
  isMobile?: boolean;
  actionsPanelMobile?: any;
  getCurrentUserAction: (params: FormData) => void;
  currentUser: {[index: string]: string}
  sessionId: string;
  mobileTitle?: string
  lang: string;
}
