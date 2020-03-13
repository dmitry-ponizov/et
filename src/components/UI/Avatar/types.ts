export type Props = Readonly<IAvatarProps>
export type AvatarLoadType = {
    loaded: boolean
}
interface IAvatarProps {
    userId: string;
    sessionId: string;
    avatar?: string;
}
