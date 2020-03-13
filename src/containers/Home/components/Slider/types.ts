import { IUsersBirthday, TNewMembers } from '../../../../store/home/types';
export type Props = Readonly<IHomeSlider>

export type IUnion = IUsersBirthday | TNewMembers

interface IHomeSlider {
    data: IUnion[] | null;
    sessionId: string;
    rtl: boolean;
    lang: string;
    loading: boolean;
    error: string | null;
    type: string;
}