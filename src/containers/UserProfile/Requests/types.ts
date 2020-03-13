export type Props = Readonly<IUserRequestsProps>


interface IUserRequestsProps {
    path: string;
    id: string;
    data: any;
    isLoading: boolean;
    error: any | null;
    pager: any;
    sortRequests: (payload: any) => void;
    fetchRequestsDataAction: (params: FormData) => void;
    changeFilterDataAction: (payload: string[] | string, field: string) => void;
    getUserDataAction: (params: FormData) => void;
    user: {[index: string]: string};
    sessionId: string;
    changePageNumberRequestsAction: (page: number) => void
}