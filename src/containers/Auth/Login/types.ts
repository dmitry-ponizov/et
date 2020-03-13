export type Props = Readonly<Login>;

interface Login {
  path: string;
  loginUserAction: (params: FormData) => void; 
  setLangAction: (lang: string) => void; 
  setCurrentPageAction: (currentPage: string) => void;
  error: string | null
}

export type State = Readonly<LoginState>;

interface LoginState {
    formData: {
      [index: string]: string
    }
    errors: {
      login: boolean;
      password: boolean;
      lang: boolean;
    }
}
