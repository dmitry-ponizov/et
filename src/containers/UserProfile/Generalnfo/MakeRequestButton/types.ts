export type Props = Readonly<MakeRequestType> ;

interface MakeRequestType {
    title: string;
    clickHandler: () => void;
    filled: boolean;
    rtl: boolean;
}

