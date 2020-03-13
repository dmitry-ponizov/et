export type Props = Readonly<HeaderButtonProps>;

interface HeaderButtonProps {
  icon: object;
  title: string;
  clickHandler: () => void;
  isMobile: boolean;
}
