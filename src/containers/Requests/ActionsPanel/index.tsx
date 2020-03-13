import React from 'react'
import { Props } from './types';
import PanelButton from '../../../components/UI/PanelButton/index';
import { IconNew } from '../../../components/UI/SvgIcons/icon-new';
import { ActionPanelStyled, VerticalLine } from './styled';
import { IconView } from '../../../components/UI/SvgIcons/icon-view';
import { IconSend } from '../../../components/UI/SvgIcons/icon-send';
import { IconCancel } from '../../../components/UI/SvgIcons/icon-cancel';
import { IconCancelRequest } from '../../../components/UI/SvgIcons/icon-cancel-request';
import { IconDownload } from '../../../components/UI/SvgIcons/icon-download';
import { Icon } from 'semantic-ui-react';
import { ExportRequestsData } from '../../../constants/api';
import { ExportRequestsFile } from '../../../components/UI/CSVDownload/files';
import CSVDownloadComponent from '../../../components/UI/CSVDownload/index';

const ActionsPanel: React.FC<Props> = ({ 
    newRequestHandler, 
    newRequestCancel,
    viewRequestHandler, 
    sendRequestHandler, 
    cancelRequestHandler,
    send, 
    cancel, 
    newRequest, 
    view,
    sessionId,
    requestData,
    cancelRequest
}) => {
    return (
        <ActionPanelStyled>
            <PanelButton
                icon={<IconNew active={newRequest} />}
                title='new'
                clickHandler={newRequestHandler}
                active={newRequest}
                type={'premium'}
            />
            <PanelButton
                icon={<IconView active={view} />}
                title='view'
                clickHandler={viewRequestHandler}
                active={view}
                type={'premium'}
            />
            <PanelButton
                icon={<IconSend active={send} />}
                title='send'
                clickHandler={sendRequestHandler}
                active={send}
                type={'success'}
            />
            <PanelButton
                icon={<IconCancel active={cancel}/>}
                title='cancel'
                clickHandler={newRequestCancel}
                active={cancel}
                type={'error'}
            />
            <PanelButton
                icon={<IconCancelRequest active={cancelRequest} />}
                title='cancel_request'
                clickHandler={cancelRequestHandler}
                noMargin={true}
                active={cancelRequest}
                type={'error'}
            />
            <VerticalLine />
            <CSVDownloadComponent
                requestData={requestData}
                path={ExportRequestsData}
                fileName={ExportRequestsFile}
                icon={<IconDownload />}
                loadingIcon={<Icon loading name='refresh' />}
                title='Export'
                sessionId={sessionId}
            />
        </ActionPanelStyled>
    )
}

export default ActionsPanel;