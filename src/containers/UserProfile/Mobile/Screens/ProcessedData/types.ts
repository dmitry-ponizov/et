import { ProcessedDataType } from "../../../../../store/users/types";

export type Props = Readonly<IProcessedDataMobileProps>


interface IProcessedDataMobileProps {
    processedData: ProcessedDataType | null;
    id: string;
    sessionId: string;
    getProcessedDataAction: (params: { from: string, to: string, userId: string, sessionId: string }) => void;
    isLoading: boolean;
    lang: string
}
