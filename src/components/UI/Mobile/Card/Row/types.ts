export type Props = Readonly<IRowMobileProps>

interface IRowMobileProps {
    title: string;
    icon?: object;
    value: string | number | object;
    alignTop?: boolean;
}
