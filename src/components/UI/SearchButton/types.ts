export type Props = Readonly<SearchButton>

interface SearchButton {
    title: string;
    icon?: any;
    fillable: boolean;
    clickHandler?: () => void;
}