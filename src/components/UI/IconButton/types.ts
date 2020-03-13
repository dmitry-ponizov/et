export type Props = Readonly<IconButtonProps>;

interface IconButtonProps {
  icon: object;
  clickHandler: () => void;
  loading: boolean;
  loadingIcon: object;
}
