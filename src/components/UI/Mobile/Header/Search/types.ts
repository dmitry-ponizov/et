export type Props = Readonly<ISearchPendingRequestsMobileProps>


interface ISearchPendingRequestsMobileProps {
  placeholder: string;
  findHandler: (query: string) => void;
  onCancel: () => void;
}