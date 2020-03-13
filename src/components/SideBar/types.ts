
export type Props = Readonly<SideBarProps>;

interface SideBarProps {
  setCurrentPageAction: (currentPage: string) => void;
  currentPage: string;
  sideBar: boolean;
  toggleSideBar: () => void;
  lang: string
}