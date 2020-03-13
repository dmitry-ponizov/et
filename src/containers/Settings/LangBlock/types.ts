export type Props = Readonly<ILangBlockProps>

interface ILangBlockProps {
    icon: React.ReactElement;
    title: string;
    selected: string;
    langSelect: (lang: string) => void;
    id: string;
}
