import { IUnion } from '../Slider/types';
export type Props = Readonly<IBirthdayProps>

interface IBirthdayProps {
    data: IUnion[] | null;
    sessionId: string;
    rtl: boolean;
    lang: string;
    loading: boolean;
    error: string | null;
    type: string
}