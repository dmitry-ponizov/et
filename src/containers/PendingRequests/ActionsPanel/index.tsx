import React from 'react'
import { Props } from './types';
import PanelButton from '../../../components/UI/PanelButton/index';
import { ActionPanelStyled, VerticalLine } from './styled';
import { IconView } from '../../../components/UI/SvgIcons/icon-view';
import { IconCancel } from '../../../components/UI/SvgIcons/icon-cancel';
import { IconAuthtorize } from '../../../components/UI/SvgIcons/icon-authorize';
import { IconDecline } from '../../../components/UI/SvgIcons/icon-decline';

const ActionsPanel: React.FC<Props> = ({ 
    cancelSelection,
    viewRequestHandler, 
    cancel, 
    view,
    sessionId,
    requestData,
    authorize,
    authHandler,
    decline,
    declineHandler,
}) => {
    return (
        <ActionPanelStyled>
           
            <PanelButton
                icon={<IconView active={view} />}
                title='view'
                clickHandler={viewRequestHandler}
                active={view}
                type={'premium'}
            />
     
            <PanelButton
                icon={<IconCancel active={cancel}/>}
                title='cancel'
                clickHandler={cancelSelection}
                active={cancel}
                type={'error'}
            />
            <VerticalLine />
            <PanelButton
                icon={<IconAuthtorize active={authorize}/>}
                title='Authtorize'
                clickHandler={authHandler}
                active={authorize}
                type={'success'}
            />
            <PanelButton
                icon={<IconDecline active={decline}/>}
                title='Decline'
                clickHandler={declineHandler}
                active={decline}
                type={'error'}
            />
             <VerticalLine />
            {/* <CSVDownloadComponent
                requestData={requestData}
                path={ExportRequestsData}
                fileName={ExportRequestsFile}
                icon={<IconDownload />}
                loadingIcon={<Icon loading name='refresh' />}
                title='Export'
                sessionId={sessionId}
            /> */}
        </ActionPanelStyled>
    )
}

export default ActionsPanel;