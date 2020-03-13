export type Props = Readonly<CheckBoxCell>;

interface CheckBoxCell {
    checkAllHandler?: () => void | undefined;
    checked: boolean | undefined;
}