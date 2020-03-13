export type Props = Readonly<ButtonProps>;

interface ButtonProps {
  clickHandler: () => void;
  background: string;
  color: string;
  title: string;
  hoverBackground: string;
}


export interface ButtonStyledProps {
    background: string;
    color: string;
    hoverBackground: string;
}