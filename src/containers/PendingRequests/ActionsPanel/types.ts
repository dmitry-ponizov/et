export type Props = Readonly<ActionsPanel>;

interface ActionsPanel {
    cancelSelection: () => void;
    viewRequestHandler: () => void;
    authHandler: () => void;
    declineHandler: () => void;
    cancel: boolean;
    authorize: boolean;
    decline: boolean;
    view: boolean;
    sessionId: string;
    requestData: any;
}