export type Props = Readonly<ViewRequestProps>;

interface ViewRequestProps {
    cancelHandler: () => void; 
    request: {[index: string]: string} | null;
    requestLoading: boolean,
    requestError: string | null;
    selectRequest: (request: any) => void;
    requests: any;
    authHistory: Array<any>;
    authHistoryLoading: boolean;
    authHistoryError: string | null;
    intl: any;
    lang: string
}