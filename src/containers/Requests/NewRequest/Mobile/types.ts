export type Props = Readonly<INewRequestMobileProps>

interface INewRequestMobileProps {
    id: string;
    successNewRequestValidation: boolean;
    setNewRequestAction: () => void;
    setUserIdAction: (id: string) => void;
    currentUser: {[index: string]: string}
    user: {[index: string]: string}
}