export type Props = Readonly<ActionsPanel>;

interface ActionsPanel {
    newRequestHandler: () => void;
    newRequestCancel: () => void;
    viewRequestHandler: () => void;
    sendRequestHandler: () => void;
    cancelRequestHandler: () => void;
    send: boolean;
    cancel: boolean;
    newRequest: boolean;
    view: boolean;
    sessionId: string;
    requestData: any;
    cancelRequest: boolean;
}