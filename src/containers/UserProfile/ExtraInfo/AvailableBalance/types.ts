export type Props = Readonly<IAvailableBalanceProps> ;

interface IAvailableBalanceProps {
    balances:  {[index: string]: string}[] | null;
    title: string;
    isLoading: boolean;
    error: string | null
}

