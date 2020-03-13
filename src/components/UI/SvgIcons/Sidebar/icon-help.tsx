import * as React from "react";
import { Props } from '../types';

export const IconHelp: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="help_default" viewBox="0 0 24 24" width="24px" height="24px">
                <g id="ic_help_default" data-name="ic help_default">
                    <rect id="bg_help_def" data-name="bg help def" width="24" height="24" fill="none" />
                    <g id="help-circle">
                        <path id="Path_he2" d="M12.1,21.3A9.3,9.3,0,1,0,2.8,12,9.3,9.3,0,0,0,12.1,21.3Z" transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        <circle id="Oval_he" cx="11.6" cy="16.6" r="1" fill="#fff" stroke="#fff" strokeWidth="0.17" />
                        <path id="Path_he" d="M9.4,9.2a2.8,2.8,0,0,1,5.4.9c0,1.9-2.8,2.8-2.8,2.8" transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                </g>
            </svg>

        )
    }
    return (
        <svg id="help_active" data-name="help active" viewBox="0 0 24 24" width="24px" height="24px">
            <rect id="bg_help_act" data-name="bg help act" width="24" height="24" fill="none" />
            <path id="Path_he3" data-name="Path he3" d="M12.1,21.3A9.3,9.3,0,1,0,2.8,12h0A9.3,9.3,0,0,0,12.1,21.3Z" transform="translate(0 0)" fill="#cae9f9" stroke="#08a5f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <circle id="Oval_he_act" data-name="Oval he act" cx="11.6" cy="16.6" r="1" fill="#08a5f0" stroke="#08a5f0" strokeWidth="0.17" />
            <path id="Path_he_act" data-name="Path he act" d="M9.4,9.2a2.8,2.8,0,0,1,5.4.9c0,1.9-2.8,2.8-2.8,2.8" transform="translate(0 0)" fill="none" stroke="#08a5f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
    )
};
