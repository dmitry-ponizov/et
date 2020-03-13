export type Props = Readonly<IAccountPhotoProps>


interface IAccountPhotoProps {
    user: {[index: string]: string};
    sessionId: string;
    changeAvatarAction: (avatar: any) => void;
    avatarHandler: (avatar: any) => void;
    avatar: string;
    rtl: boolean;
}
