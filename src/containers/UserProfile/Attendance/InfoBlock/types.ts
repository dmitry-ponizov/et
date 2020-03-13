export type Props = Readonly<InfoBlockProps> ;

interface InfoBlockProps {
    selectedDate: string | null;
    codes: string[] | null;
    lang: string
}

