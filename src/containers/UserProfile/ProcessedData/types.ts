import { ProcessedDataType } from '../../../store/users/types';
export type Props = Readonly<ProcessedData> ;

interface ProcessedData {
    changeDateFrom: (date: any) => void;
    changeDateTo: (date: any) => void;
    fromDate: string;
    toDate: string
    sessionId: string
    processedData: ProcessedDataType | null;
    loading: boolean;
    lang: string
}

