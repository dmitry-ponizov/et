export interface IMeState {
    user: {
        data: any;
        loading: boolean
        error: string | null
    },
    editUserInfo: boolean;
    loading: boolean;
    error: string | null;
    avatar: any;
}
