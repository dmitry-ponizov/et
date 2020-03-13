export type Props = Readonly<CSVDownloadProps>;

interface CSVDownloadProps {
  title: string;
  icon: object;
  requestData: any;
  loadingIcon: any;
  path: string;
  fileName: string;
  sessionId: string;
}

export type State = Readonly<CSVDownloadState>;

interface CSVDownloadState {
  data: any;
  loading: boolean;
}
