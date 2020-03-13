import { IUnion } from '../Slider/types';
export type Props = Readonly<DynamicCardsProps>;

interface DynamicCardsProps {
    tag: string;
    user: IUnion
    sessionId: string;
    rtl: boolean;
    lang: string;
    lastId: string;
}