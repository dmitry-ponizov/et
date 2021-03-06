import * as React from "react";
import { Props } from '../types';

export const IconTeam: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="team_def" data-name="team def" viewBox="0 0 24 24" width="24px" height="24px">
                <rect id="bg_team_def" data-name="bg team def" width="24" height="24" fill="none" />
                <path id="Path_tm2" d="M19.2,9.3v-3A3.3,3.3,0,0,0,15.9,3h-.7a3.3,3.3,0,0,0-3.3,3.3v3a2,2,0,0,0,.6,1.4V13a24.4,24.4,0,0,0-4.2,2.7,2,2,0,0,0-.8,1.6v2.1a.6.6,0,0,0,.6.6H22.9a.6.6,0,0,0,.6-.6V17.3a2,2,0,0,0-.8-1.6A24.8,24.8,0,0,0,18.6,13V10.7A1.9,1.9,0,0,0,19.2,9.3Z" transform="translate(0 0)" fill="#fff" />
                <path id="Path_tm1" d="M.9,20h5a.6.6,0,1,0,0-1.2H1.6v-1a.5.5,0,0,1,.2-.4,17.4,17.4,0,0,1,3.2-2,.7.7,0,0,0,.4-.6V12.5a.6.6,0,0,0-.3-.5.4.4,0,0,1-.2-.4V9.3A1.5,1.5,0,0,1,6.4,7.8h.5A1.5,1.5,0,0,1,8.4,9.3v2.3a.4.4,0,0,1-.2.4.6.6,0,0,0-.3.5v1.1a.6.6,0,0,0,1.2,0v-.8a1.7,1.7,0,0,0,.5-1.2V9.3A2.7,2.7,0,0,0,6.9,6.6H6.4A2.7,2.7,0,0,0,3.7,9.3v2.3a1.7,1.7,0,0,0,.5,1.2v1.6A18.9,18.9,0,0,0,1,16.4a1.7,1.7,0,0,0-.6,1.3v1.6A.6.6,0,0,0,.9,20Z" transform="translate(0 0)" fill="#fff" />
                <path id="fil_tm_def" data-name="fil tm def" d="M22,16.7a.8.8,0,0,1,.3.7v1.4H8.8V17.3a.8.8,0,0,1,.3-.7A23.3,23.3,0,0,1,13.3,14a.8.8,0,0,0,.4-.7V10.4a.6.6,0,0,0-.3-.5.7.7,0,0,1-.3-.6v-3a2.1,2.1,0,0,1,2.1-2.1h.7A2.1,2.1,0,0,1,18,6.3v3a.7.7,0,0,1-.3.6.6.6,0,0,0-.3.5v2.9a.7.7,0,0,0,.4.7A24,24,0,0,1,22,16.7Z" transform="translate(0 0)" fill="#08a5f0" />
            </svg>

        )
    }

    return (
        <svg id="team_active" data-name="team active" viewBox="0 0 24 24" width="24px" height="24px">
            <rect id="bg_team_act" data-name="bg team act" width="24" height="24" fill="none" />
            <path id="Path_tm4" data-name="Path tm4" d="M19.2,9.3v-3A3.3,3.3,0,0,0,15.9,3h-.7a3.3,3.3,0,0,0-3.3,3.3h0v3a2,2,0,0,0,.6,1.4V13a24.4,24.4,0,0,0-4.2,2.7,2,2,0,0,0-.8,1.6v2.1a.6.6,0,0,0,.6.6H22.9a.6.6,0,0,0,.6-.6h0V17.3a2,2,0,0,0-.8-1.6A24.8,24.8,0,0,0,18.6,13V10.7A1.9,1.9,0,0,0,19.2,9.3Z" transform="translate(0 0)" fill="#08a5f0" />
            <path id="Path_tm3" data-name="Path tm3" d="M.9,20h5a.6.6,0,1,0,0-1.2H1.6v-1a.5.5,0,0,1,.2-.4,17.4,17.4,0,0,1,3.2-2,.7.7,0,0,0,.4-.6V12.5a.6.6,0,0,0-.3-.5.4.4,0,0,1-.2-.4V9.3A1.5,1.5,0,0,1,6.4,7.8h.5A1.5,1.5,0,0,1,8.4,9.3v2.3a.4.4,0,0,1-.2.4.6.6,0,0,0-.3.5v1.1a.6.6,0,0,0,1.2,0v-.8a1.7,1.7,0,0,0,.5-1.2V9.3A2.7,2.7,0,0,0,6.9,6.6H6.4A2.7,2.7,0,0,0,3.7,9.3h0v2.3a1.7,1.7,0,0,0,.5,1.2v1.6a18.9,18.9,0,0,0-3.2,2,1.7,1.7,0,0,0-.6,1.3v1.6a.6.6,0,0,0,.5.7Z" transform="translate(0 0)" fill="#08a5f0" />
            <path id="fil_tm_act" data-name="fil tm act" d="M22,16.7a.8.8,0,0,1,.3.7v1.4H8.8V17.3a.8.8,0,0,1,.3-.7A23.3,23.3,0,0,1,13.3,14a.8.8,0,0,0,.4-.7V10.4a.6.6,0,0,0-.3-.5.7.7,0,0,1-.3-.6v-3a2.1,2.1,0,0,1,2.1-2.1h.7A2.1,2.1,0,0,1,18,6.3h0v3a.7.7,0,0,1-.3.6.6.6,0,0,0-.3.5v2.9a.7.7,0,0,0,.4.7A24,24,0,0,1,22,16.7Z" transform="translate(0 0)" fill="#cae9f9" />
        </svg>

    )
};
