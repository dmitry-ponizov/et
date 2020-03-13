import { CommonType } from '../../../constants/common';

export type Props = Readonly<MainCategoryProps>;

interface MainCategoryProps {
    mainCategory: { name: string, defaultCategory: string, categories: Array<any>, route: string };
    activeMenu: string;
    setCurrentPageAction: (currentPage: string) => void;
    intl: any;
}

export type State = Readonly<MainCategoryState>;

interface MainCategoryState {
  visible: boolean;
}


export interface IMainCategoryStyled {
  visible: boolean;
}

export interface IMainCategoryTitle {
  active: boolean;
  theme: CommonType;
}