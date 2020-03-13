export type IUsersBirthday = {
    full_name: string;
    full_arabic_name: string;
    avatar: string;
    birth_date: string;
    id: string
}
export type TNewMembers = {
    full_name: string;
    full_arabic_name: string;
    avatar: string;
    title: string;
    id: string;
    hire_date: string;
}

export interface IHomeState {
    birthdays: {
        data: IUsersBirthday[] | null;
        loading: boolean
        error: string | null
    },
    newMembers: {
        data: TNewMembers[] | null;
        loading: boolean
        error: string | null
    }
}