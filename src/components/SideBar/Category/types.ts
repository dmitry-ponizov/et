import { CommonType } from '../../../constants/common';

export type Props = Readonly<ICategoryProps>;

interface ICategoryProps {
    category: {name: string, route: string};
    activeMenu: string;
    selectCategory: (categoryRoute: string) => void; 
}

export interface ICategoryStyled {
    active: boolean;
    theme: CommonType;
  }