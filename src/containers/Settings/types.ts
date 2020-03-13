export type Props = Readonly<ISettingsProps>

interface ISettingsProps {
    path: string;
    setCurrentPageAction: (path: string) => void;
    setLangAction: (lang: string) => void;
    lang: string;
}