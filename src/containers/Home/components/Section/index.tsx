import * as React from 'react';
import { Props } from './types';
import { Container, Wrap, Title } from './styled';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import ErrorComponent from '../../../../components/UI/Error/index';
import LoaderComponent from '../../../../components/UI/Loader/index';
import HomeSlider from '../Slider/index';


const HomeSection: React.FunctionComponent<Props & InjectedIntlProps> = ({ data, sessionId, intl, rtl, lang, error, loading, type }) => {
    
    return (
        <Wrap rtl={rtl}>
            <Title>
                {type === 'birthdays' ?  intl.formatMessage({ id: `home.birthday`}) : intl.formatMessage({ id: `home.new_members`})}
            </Title>
            <Container type={type}>
                {data && <HomeSlider type={type} data={data}  sessionId={sessionId} rtl={rtl} lang={lang} loading={loading} error={error} />}
                {error && !loading && <ErrorComponent error={error} />}
                { loading  ? <LoaderComponent margin="200px" /> : ''}
            </Container>
        </Wrap>
    );
};

export default injectIntl(HomeSection);
