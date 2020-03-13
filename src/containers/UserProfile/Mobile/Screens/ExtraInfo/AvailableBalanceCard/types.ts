export type Props = Readonly<IAvailableBalanceCardProps>


interface IAvailableBalanceCardProps {
    availableBalance: {[index: string]: string}[]  | null;
}