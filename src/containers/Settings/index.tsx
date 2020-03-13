import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Props } from './types';
import { connected } from './connect';
import { ContentBlock } from '../../styledTheme/globalStyles';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import { SettingsCrumbs } from './constants';
import { Title, SettingsContainer, LangTitle, LangDesc, BtnStyled } from './styled';
import { IconArabicLang } from '../../components/UI/SvgIcons/icon-arabic-lang';
import LangBlock from './LangBlock/index';
import { IconUKFlag } from '../../components/UI/SvgIcons/icon-uk-flag';
import { InjectedIntlProps, injectIntl } from 'react-intl';


const Settings: React.FunctionComponent<Props & InjectedIntlProps> = ({ path, setCurrentPageAction, setLangAction, lang, intl}) => {
    useEffect(() => {
        setCurrentPageAction(path)
    }, [path, setCurrentPageAction])
    
    const changeLang = async (lang: string) => {
        await sessionStorage.setItem("lang", lang);
        await setLangAction(lang)
    }

    const displayConfirmNotification = () => {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.ready
            .then(function(swReg) {
                swReg.showNotification('Elteam', {
                    body: 'Successfully subscrubed!',
                    icon: '/android-chrome-192x192.png',
                    dir: 'ltr',
                    vibrate: [100, 50, 200],
                    // badge: '/android-chrome-192x192.png',
                    // tag: 'confirm-notification',
                    // renotify: false
                });
            })
        }
    }

    // const configurePushSub = () => {
    //     if(!('serviceWorker' in navigator)) {
    //         return;
    //     }
    //     let reg: any;
    //     navigator.serviceWorker.ready
    //     .then((swReg) => {
    //        reg = swReg
    //        return swReg.pushManager.getSubscription()
    //     })
    //     .then((sub) => {
    //         if(sub === null) {
    //             console.log(reg)
    //            reg.pushManager.subscribe({
    //                 userVisibleOnly: true,
    //                 applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
    //            });
    //         } else {
                
    //         }
    //     }).then((newSub) => {
    //         displayConfirmNotification()
    //         // TODO storing subscriptions
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    const subscribe = () => {
        Notification.requestPermission(function(result) {
            console.log('User choice', result);
            if(result !== 'granted') {
                console.log('No notification permission granted!')
            } else {
                displayConfirmNotification()
            }
        })
    }

    return (
        <div>
            <Header isMobile={false} />
            <ContentBlock>
                <Breadcrumbs crumbs={SettingsCrumbs} lastCrumb={intl.formatMessage({ id: `global.settings`})} />
                <Title>{intl.formatMessage({ id: `settings.system_settings`})}</Title>
                <SettingsContainer>
                    <LangTitle>{intl.formatMessage({ id: `settings.lang`})}</LangTitle>
                    <LangDesc>{intl.formatMessage({ id: `settings.change_lang`})}:</LangDesc>
                    <LangBlock icon={<IconArabicLang />} title={intl.formatMessage({ id: `settings.ar`})} id="ar" selected={lang} langSelect={changeLang} />
                    <LangBlock icon={<IconUKFlag />} title={intl.formatMessage({ id: `settings.en`})} selected={lang} id="en" langSelect={changeLang} />
                </SettingsContainer>
                <SettingsContainer>
                    <LangTitle>Notifications</LangTitle>
                    <BtnStyled onClick={subscribe}>Allow Notifications</BtnStyled>
                </SettingsContainer>
            </ContentBlock>
        </div>
    );
};

export default connected(injectIntl(Settings));
