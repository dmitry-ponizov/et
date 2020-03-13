export type Props = Readonly<IModalMessageProps>

interface IModalMessageProps {
    success: boolean;
    error: string | null;
    acceptHandler: () => void;
    successMessage: string;
    errorMessage: string | null;
  }