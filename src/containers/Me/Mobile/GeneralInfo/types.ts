export type Props =  Readonly<IMeGeneralInfoMobileProps>

interface IMeGeneralInfoMobileProps {
    sessionId: string;
    user: {[index: string]: string};
    avatar: any
    changeAvatarAction: (avatar: any) => void;
    setAvatarAction: (avatar: any) => void;
    rtl: boolean
}