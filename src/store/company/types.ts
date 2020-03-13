export interface IDivision {
    id: string
    manual_id: number
    name: string
    short_name: boolean
}

export interface IDepartment {
    id: string
    status: string
    manual_id: number
    name: string
    tag: string
    short_name: string
}


export interface ICompanyState {
    divisions: {
        data: IDivision[] | null;
        loading: boolean;
        error: string | null;
    },
    departments: {
        data: IDepartment[] | null;
        loading: boolean;
        error: string | null;
    }
}
