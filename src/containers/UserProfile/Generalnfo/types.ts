import { SyntheticEvent } from "react";

export type Props = Readonly<GeneralInfo> ;

interface GeneralInfo {
    user: {[index: string]: string};
    makeNewRequestHandler: () => void;
    sessionId: string;
    goToUserRequests: () => void;
    rtl: boolean;
}