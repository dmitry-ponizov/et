export type Props = Readonly<PrivateRouteProps>;

interface PrivateRouteProps {
    path: string;
    component: any;
    isAuth: boolean;
    setCurrentPageAction: (currentPage: string) => void;
    id?: string;
}
