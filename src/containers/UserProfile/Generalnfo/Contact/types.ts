import { SyntheticEvent } from "react";

export type Props = Readonly<ContactType> ;

interface ContactType {
    label: string;
    info: object | string;
    type: string;
    intl: any;
}