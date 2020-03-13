export type Props = Readonly<BackDropProps>;

interface BackDropProps {
    show: boolean;
    clicked: () => void;
    transparent: boolean;
}

export type BackDropStyled = {
    transparent: boolean;
}