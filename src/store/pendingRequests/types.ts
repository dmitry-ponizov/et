export interface IRequestAuthState {
    data: Array<object>;
    loading: boolean | null;
    error: boolean | null;
    requestData: any;
    pager: any;
    refreshLoading: boolean;
    requestTypes: any;
    request: {
        data: { [index: string]: string },
        loading: boolean,
        error: string | null
    },
    authorize: {
        approve: boolean,
        decline: boolean,
        loading: boolean,
        error: string | null
    },
    userId: string
}
