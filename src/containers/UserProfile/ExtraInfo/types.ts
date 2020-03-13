export type Props = Readonly<ExtraInfoProps> ;

interface ExtraInfoProps {
    user: {[index: string]: string};
    getAvailableBalance: (props: FormData) => void
    sessionId: string
    availableBalance: {[index: string]: string}[]  | null;
    isLoading: boolean;
    error: string | null
}
