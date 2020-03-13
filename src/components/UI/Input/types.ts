export type Props = Readonly<InputProps>;

interface InputProps {
  styleClass: string;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean;
  focus?: boolean;
  changeHandler: (e: any) => void;
  name: string;
  value: string | boolean;
  type: string;
  icon?: string;
  iconPosition?: 'left'
}
