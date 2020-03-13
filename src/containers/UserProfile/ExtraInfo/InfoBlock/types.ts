export type Props = Readonly<InfoBlockTypes> ;

interface InfoBlockTypes {
    value: string | null;
    title: string;
    isLoading?: boolean;
    error?: string | null
}
