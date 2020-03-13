export type Props = Readonly<IPendingRequestsMobileProps>

interface IPendingRequestsMobileProps {
    requests: {[index: string]: any}[]
    findHandler: (query: string) => void;
    isLoading: boolean;
    onCancel: () => void;
    approveDecline: (status: boolean) => void;
    selectRequestHandler: (id: string) => void;
    approved: boolean;
    declined: boolean;
    approveDeclineError: string | null
    resetAutorizeAction: () => void
    modalProps: { [index: string]: any }
    sortHandler: (direction: string, field: string) => void;
    error: string | null
}