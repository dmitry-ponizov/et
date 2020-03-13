export type Props =  Readonly<IMeMobileProps>


interface IMeMobileProps {
    sessionId: string;
    user: {[index: string]: string};
    avatar: any;
    changeAvatarAction: (avatar: any) => void;
    setAvatarAction: (avatar: any) => void;
    rtl: boolean
}