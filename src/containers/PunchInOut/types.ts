import { IUserPunch, IPunchOption } from '../../store/punchInOut/types';
export type Props = Readonly<IPunchInOutProps>

export type PunchStyledProps = {
    width: string | undefined
}

interface IPunchInOutProps {
    userPunch: IUserPunch | null;
    getUserPunchAction: (params: FormData, stationId: string) => void;
    sessionId: string
    stationId: string
    punchCancel: () => void
    userPunchLoading: boolean;
    userPunchError: string | null;
    statuses: IPunchOption | null;
    statusesLoading: boolean;
    statusesError: string | null;
    types: IPunchOption | null;
    typesLoading: boolean;
    typesError: string | null;
    getPunchStatusesAction: (params: FormData) => void;
    getPunchTypesAction: (params: FormData) => void;
    width?: string;
    setPunchStatusId: (value: number) => void;
    setPunchTypeId: (value: number) => void;
    setUserPunchAction: (params: FormData) => void;
    lang: string
}
