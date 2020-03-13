import React, { useEffect } from 'react';
import { Props } from './types'
import { PunchStyled, Header, Title, PunchBody, LeftBlock, RightBlock, Buttons, PunchWrapper } from './styled';
import Backdrop from '../../components/UI/BackDrop/index';
import { IconClose } from '../../components/UI/SvgIcons/icon-close';
import StaticField from './StaticField';
import FilterDropDown from '../../components/UI/FilterDropdown/index';
import { connected } from './connect';
import { formDataRequestFormat, isRtl } from '../../utils/index';
import SearchButton from '../../components/UI/SearchButton/index';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { IconCancelFilterBtn } from '../../components/UI/SvgIcons/icon-cancel-filter-btn';
import { IconSave } from '../../components/UI/SvgIcons/icon-save';
import LoaderComponent from '../../components/UI/Loader/index';
import { useWindowSize } from '../../hooks/index';
import { mobileResulution } from '../../constants/common';
import ErrorComponent from '../../components/UI/Error/index';


const PunchInOut: React.FunctionComponent<Props & InjectedIntlProps> = ({
    userPunch,
    getUserPunchAction,
    sessionId,
    stationId,
    punchCancel,
    statuses,
    statusesLoading,
    statusesError,
    getPunchStatusesAction,
    types,
    getPunchTypesAction,
    typesLoading,
    typesError,
    intl,
    userPunchLoading,
    width,
    setPunchStatusId,
    setPunchTypeId,
    setUserPunchAction,
    userPunchError,
    lang
}) => {

    const size = useWindowSize();
    const isMobile = size.width ? size.width < mobileResulution : false;

    useEffect(() => {
        const formData = formDataRequestFormat(null, sessionId);
        if (!userPunch) {
            getUserPunchAction(formData, stationId)
            // getUserPunchAction(formData, 'c3432f5174581dc408b38c93aee39b39')
        }
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getUserPunchAction, sessionId, stationId])

    useEffect(() => {
        const formData = formDataRequestFormat(['status'], sessionId);
        if (!statuses) {
            getPunchStatusesAction(formData)
        }
    }, [getPunchStatusesAction, sessionId, statuses])

    useEffect(() => {
        const formData = formDataRequestFormat(['type'], sessionId);
        if (!types) {
            getPunchTypesAction(formData)
        }
    }, [getPunchTypesAction, sessionId, types])


    const punchTypeHandler = (type: string) => {
        setPunchTypeId(Number(type))
    }

    const punchStatusHandler = (status: string) => {
        setPunchStatusId(Number(status))
    }


    const getTranslate = (option: string) => {
        return intl.formatMessage({ id: `global.${option}` })
    }

    const savePunch = () => {
        const formData = formDataRequestFormat([userPunch], sessionId);
        setUserPunchAction(formData)
        punchCancel()
        if(isMobile) {
            window.history.go(-1)
        }
     }
    const rtl = isRtl(lang)
    return (
        <>
            {!isMobile && <Backdrop transparent={false} clicked={punchCancel} show={true} />}
            <PunchWrapper width={width}>
                <PunchStyled>
                    <Header>
                        <Title>{getTranslate('punch_in_out')}</Title>
                        <div onClick={punchCancel}>
                            <IconClose />
                        </div>
                    </Header>
                    {userPunch && 
                    <>
                        <PunchBody>
                            <LeftBlock rtl={rtl}>
                                <StaticField title={getTranslate('employee')} value={userPunch.first_name} />
                                <StaticField title={getTranslate('time')}value={userPunch.punch_time} />
                                <StaticField title={getTranslate('date')} value={userPunch.punch_date} />
                            </LeftBlock>
                            <RightBlock>
                                <FilterDropDown
                                    title={getTranslate('punch_type')}
                                    selected={userPunch.type_id}
                                    clickHandler={punchTypeHandler}
                                    data={types}
                                    loading={typesLoading}
                                    name="punch_type"
                                    error={typesError ? { punch_type: [typesError] } : {}}
                                    rtl={rtl}
                                />
                                <FilterDropDown
                                    title={getTranslate('in_out')}
                                    selected={userPunch.status_id}
                                    clickHandler={punchStatusHandler}
                                    data={statuses}
                                    loading={statusesLoading}
                                    name="punch_status"
                                    error={statusesError ? { punch_type: [statusesError] } : {}}
                                    rtl={rtl}
                                />
                            </RightBlock>
                        </PunchBody>
                        <Buttons>
                        {!isMobile && <SearchButton
                                title={getTranslate('cancel')}
                                icon={<IconCancelFilterBtn />}
                                fillable={false}
                                clickHandler={punchCancel}
                            />}
                            <SearchButton title={getTranslate('save')} icon={<IconSave />} clickHandler={savePunch} fillable={true} />
                        </Buttons>
                    </>}
                    {userPunchLoading ? <LoaderComponent margin="150px" /> : ''}
                    {userPunchError && !userPunchLoading ? <ErrorComponent error={userPunchError} /> : ''}
                </PunchStyled>
            </PunchWrapper>
        </>);
};

export default connected(injectIntl(PunchInOut));
