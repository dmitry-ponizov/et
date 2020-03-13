export type Props = Readonly<ActionsPanelTypes> ;

interface ActionsPanelTypes {
    punchHandler: () => void;
    newRequestHandler: () => void;
    pendingRequestHandler: () => void;
    notificationHandler: () => void;
    isMobile: boolean;
    showPunch: boolean;
    isLoading: boolean
}