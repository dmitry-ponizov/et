import React, { Component, SyntheticEvent } from 'react';
import { Props, State } from './types';
import {
  LoginWrap,
  LoginContainer,
  LogoStyled,
  LoginFormStyled,
  TitleStyled,
  Label,
  FieldStyled,
  ErrorTitle
} from './styled';
import InputComponent from '../../../components/UI/Input/index';
import ButtonComponent from '../../../components/UI/Button';
import { connected } from './connect';
import produce from 'immer';
import { CommonType } from '../../../constants/common';
import { IconLogo } from '../../../components/UI/SvgIcons/icon-logo';


class Login extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      formData: {
        login: '',
        password: '',
        lang: 'en'
      },
      errors: {
        login: false,
        password: false,
        lang: false
      }
    };
  }
  public componentDidMount () {
    this.props.setCurrentPageAction(this.props.path);
  }
  
  private validate = () => {
    let { formData } = this.state;
    const fields = Object.keys(formData);
    let validate = true;
    fields.forEach((name: string) => {
      if(!formData[name] || formData[name] === '' || formData[name].length === 0) {
        validate = false;
        this.setState(
          produce(draft => {
            draft.errors[name] = true;
          })
        );
      }
    });
    return validate;
  };

  private loginHandler = () => {
    const { loginUserAction, setLangAction } = this.props;
    const { formData: { lang } } = this.state;
    if(this.validate()) {
      let formData = new FormData();
      const params = JSON.stringify(Object.assign({}, [this.state.formData.login, this.state.formData.password]));
      formData.append('json', params);
      loginUserAction(formData);
      sessionStorage.setItem("lang", lang);
      setLangAction(lang);
    }
  };

  
  private changeHandler = (e: any) => {
    const target = e.target;
  
    this.setState(
      produce(draft => {
        draft.formData[target.name] = target.value;
        draft.errors[target.name] = false;
      })
    );
  };
  
  private dropDownHandler = (e: SyntheticEvent, data: CommonType) => {
    this.setState(
      produce(draft => {
        draft.formData.lang = data.value;
        draft.errors.lang = false;
      })
    );
  }

  public render() {
    const { formData, errors } = this.state;
    const { error } = this.props;
    return (
      <LoginWrap>
        <LoginContainer>
          <LogoStyled>
              <IconLogo />
          </LogoStyled>
          <LoginFormStyled>
            <TitleStyled>Log in to your account</TitleStyled>
            <FieldStyled>
              <Label>Login</Label>
              <InputComponent
                placeholder='Login'
                styleClass='loginFormInput'
                changeHandler={this.changeHandler}
                name='login'
                value={formData.login}
                error={errors.login}
                type="text"
                icon="user"
                iconPosition="left"
              />
            </FieldStyled>
            <FieldStyled>
            <Label>Password</Label>
              <InputComponent
                placeholder='Password'
                styleClass='loginFormInput'
                changeHandler={this.changeHandler}
                name='password'
                value={formData.password}
                error={errors.password}
                type="password"
                icon="key"
                iconPosition="left"
              />
            </FieldStyled>
            {/* <FieldStyled>
              <DropDownStyled>
                <DropDownMenu
                  options={options}
                  defaultValue={'en'}
                  styleClass={'loginDropDown'}
                  placeholder='Choose language'
                  error={errors.lang}
                  changeHandler={this.dropDownHandler}
                />
              </DropDownStyled>
            </FieldStyled> */}
            {error ? <ErrorTitle>{error}</ErrorTitle> : ''}
            <FieldStyled>
              <ButtonComponent
                background='#1161be'
                color='#fff'
                hoverBackground='#2976d1'
                title='Log In'
                clickHandler={this.loginHandler}
              />
            </FieldStyled>
          </LoginFormStyled>
        </LoginContainer>
      </LoginWrap>
    );
  }
}
export default connected(Login);
