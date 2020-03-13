export type Props = Readonly<CheckBoxCell>;

interface CheckBoxCell {
    id: string;
    onChangeHandler: (id: string) => void;
    checked: boolean;
}