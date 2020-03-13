export type Props = Readonly<FiltersProps>;

interface FiltersProps {
    employees: object[],
    sessionId: string
    fetchEmployeesDataAction: (params: FormData) => void
    requestTypes: string[];
    employeeLoading: boolean;
    typeRequestsLoading: boolean;
    changeFilterDataAction: (payload: string[] | string, field: string) => void
    userIds: string[]
    requestTypeIds: string[]
    clearFilterDataAction: () => void;
    startDate: string;
    endDate: string;
    getRequestTypesAction: (params: FormData) => void;
    refreshRequestIds: () => void;
    fetchRequestAuthDataAction: (url: string) => void;
    intl: any;
    lang: string
}