export type Props = Readonly<IGeneralInfoMobile> ;

interface IGeneralInfoMobile {
    user: any;
    sessionId: string;
    userId: string;
    getUserDataAction: (params: FormData) => void;
}