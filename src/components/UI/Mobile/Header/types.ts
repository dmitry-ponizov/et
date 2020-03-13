export type Props = Readonly<IHeaderMobileProps>

interface IHeaderMobileProps {
    title: string;
    sortHandler: () => void;
    findHandler: (query: string) => void;
    placeholder: string;
    withSearch: boolean;
    onCancel: () => void;
    getCurrentUserAction: (params: FormData) => void;
    currentUser: {[index: string]: string}
    sessionId: string;
    getStationIdAction: () => void;
    stationId: string;
}