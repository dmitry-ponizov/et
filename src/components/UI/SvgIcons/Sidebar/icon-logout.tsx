import * as React from "react";
import { Props } from '../types';

export const IconLogout: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="log_out_def" data-name="log out def" viewBox="0 0 24 24" width="24px" height="24px">
                <rect id="bg_log-out_def" data-name="bg log-out def" width="24" height="24" fill="none" />
                <g id="ic_log-out_def" data-name="ic log-out def">
                    <path id="ar3" d="M9,20H5.5a1.8,1.8,0,0,1-1.8-1.8V5.8A1.8,1.8,0,0,1,5.5,4H9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <polyline id="ar2" points="15.2 16.4 19.7 12 15.2 7.6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path id="ar1" d="M19.7,12H9" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
            </svg>

        )
    }
    return (
        <svg id="log_out_act" data-name="log out act" viewBox="0 0 24 24" width="24px" height="24px">
            <rect id="bg_log_out_act" data-name="bg log out act" width="24" height="24" fill="none" />
            <g id="ic_log-out_act" data-name="ic log-out act">
                <path id="ar6" d="M9,19.9H5.5a1.8,1.8,0,0,1-1.8-1.8V5.7A1.8,1.8,0,0,1,5.5,3.9H9" transform="translate(0 0)" fill="none" stroke="#08a5f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <polyline id="ar5" points="15.2 16.3 19.7 11.9 15.2 7.5" fill="none" stroke="#08a5f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path id="ar4" d="M19.7,11.9H9" transform="translate(0 0)" fill="none" stroke="#08a5f0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </g>
        </svg>

    )
};
