export type Props = Readonly<IUserExtraInfoProps>

interface IUserExtraInfoProps {
    user: {[index: string]: string};
    id: string;
    availableBalance: {[index: string]: string}[] | null;
    getAvailableBalanceAction: (params: FormData) => void;
    sessionId: string;
  }