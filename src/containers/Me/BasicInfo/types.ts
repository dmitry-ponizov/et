export type Props = Readonly<IBasicInfoProps>

interface IBasicInfoProps {
    user: any;
    editUser: (params: any) => void;

}

export type AcceptType = {
    active: boolean;
}