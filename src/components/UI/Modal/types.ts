export type Props = Readonly<ModalProps>;

interface ModalProps {
    show: boolean;
    modalClosed: () => void;
}

export interface ModalStyledProps {
    show: boolean;
}