export type Props = Readonly<PanelButtonProps>;

interface PanelButtonProps {
  title: string;
  icon: object;
  clickHandler?: () => void;
  noMargin?: boolean | undefined;
  active: boolean;
  type: string;
}
