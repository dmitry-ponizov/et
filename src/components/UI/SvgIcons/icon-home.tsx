import * as React from "react";
import { Props } from './types';

export const IconHome: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg width="32" height="32" viewBox="0 0 32 32">
                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h32v32H0z" />
                    <path fill="#8291AE" fillRule="nonzero" stroke="#8291AE" strokeWidth=".5" d="M29.6 12.133c.295.221.354.64.133.934l-.533.266h-.4L26.933 12v13.867a.667.667 0 0 1-.666.666H19.2a.667.667 0 0 1-.667-.666V19.2a2.133 2.133 0 0 0-4.266 0V26a.667.667 0 0 1-.667.667H6.4A.667.667 0 0 1 5.733 26V11.867l-1.866 1.466a.667.667 0 1 1-.8-1.067L16 2.934a.667.667 0 0 1 .8 0l12.8 9.2zM25.467 25.2V10.933l-9.2-6.666-9.2 6.666V25.2H12.8v-6a3.6 3.6 0 0 1 7.067 0v6h5.6z" />
                </g>
            </svg>
        )
    }
    return (
        <svg id="home_active" width="32" height="32" data-name="home active" viewBox="0 0 32 32">
            <g id="ic_home" data-name="ic home">
                <rect id="bg_home_act" data-name="bg home act" width="32" height="32" fill="none" />
                <g id="home_def" data-name="home def">
                    <path id="str_home" data-name="str home" d="M29.6,12.1a.7.7,0,0,1,.1.9l-.5.3h-.4L26.9,12V25.9a.7.7,0,0,1-.7.7H19.2a.7.7,0,0,1-.7-.7h0V19.2a2.1,2.1,0,0,0-4.3,0V26h0a.7.7,0,0,1-.7.7H6.4a.7.7,0,0,1-.7-.7V11.9L3.9,13.3a.7.7,0,0,1-.9-.1h0a.7.7,0,0,1,.1-.9L16,2.9a.7.7,0,0,1,.8,0ZM25.5,25.2V10.9L16.3,4.3,7.1,10.9V25.2h5.7v-6a3.6,3.6,0,0,1,7.1,0v6Z" fill="#08a5f0" stroke="#08a5f0" strokeWidth="0.5" />
                    <path id="fill_home" data-name="fill home" d="M25.5,10.9V25.2H19.9v-6a3.6,3.6,0,0,0-7.1,0v6H7.1V10.9l9.2-6.7Z" fill="#cae9f9" />
                </g>
            </g>
        </svg>
    )
};
