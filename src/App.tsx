import React, { useEffect } from 'react';
import MainRoutes from './routes';
import { GlobalStyle, RightBlock } from './styledTheme/globalStyles';
import SideBar from './components/SideBar';
import { WrapStyled } from './styledTheme/globalStyles';
import { IntlProvider } from 'react-intl';
import { locales }  from './localization/locales';
import { connect } from 'react-redux';
import { setLangAction, setSessionIdAction, authCheckState, getStationIdSuccessAction } from './store/general/actions';
import { getLocalization, selectorGetCurrentPage } from './store/general/selectors';
import { isRtl } from './utils';
import { CommonType } from './constants/common';

type Props = {
  lang: string;
  onSetLangAction: (lang: string) => void;
  onSetSessionIdAction: (string: string) => void;
  onAuthCheckState: () => void;
  currentPage: string
  onSetStationIdAction: (stationId: string) => void;
};


const App: React.FC<Props> = ({lang, onSetLangAction, onSetSessionIdAction, onAuthCheckState, currentPage, onSetStationIdAction}) => {
  const langFromSt = sessionStorage.getItem('lang');
  const sesstionId = sessionStorage.getItem('SessionID');
  const stationId = localStorage.getItem('StationID')

  useEffect(() => {
    if(currentPage !== '/login') {
      onAuthCheckState()
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  if(langFromSt) {
    onSetLangAction(langFromSt);
  }
  if(sesstionId) {
    onSetSessionIdAction(sesstionId)
  }

  if(stationId) {
    onSetStationIdAction(stationId)
  }

  const currentLang = langFromSt ? langFromSt : lang
  const rtl = isRtl(currentLang)


  return (
    <IntlProvider locale={currentLang} messages={locales[currentLang]}>
      <div className='App'>
          <GlobalStyle />
            <WrapStyled rtl={rtl}>
              <SideBar /> 
              <RightBlock>
                  <MainRoutes />
              </RightBlock>
          </WrapStyled> 
      </div>
    </IntlProvider>
  );
};



const mapStateToProps = (state: CommonType) => {
  const generalState = state.general;
  return {
    lang: getLocalization(state),
    currentPage: selectorGetCurrentPage(generalState),
  };
};



const mapDispachToProps = (dispatch: any) => {
  return {
    onSetLangAction: (lang: string) => dispatch(setLangAction(lang)),
    onSetSessionIdAction: (sessionId: string) =>  dispatch(setSessionIdAction(sessionId)),
    onAuthCheckState: () => dispatch(authCheckState()),
    onSetStationIdAction: (stationId: string) => dispatch(getStationIdSuccessAction(stationId))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
