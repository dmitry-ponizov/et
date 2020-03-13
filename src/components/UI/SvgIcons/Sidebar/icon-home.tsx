import * as React from "react";
import { Props } from '../types';

export const IconHome: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="home_default" data-name="home default" viewBox="0 0 24 24" width="24px" height="24px">
                <g id="ic_home_def" data-name="ic home def">
                    <rect id="bg_home_def" data-name="bg home def" width="24" height="24" fill="none" />
                    <g id="home">
                        <path id="str_home_def" data-name="str home def" d="M22.2,9.1a.5.5,0,0,1,.1.7l-.4.2h-.3L20.2,9V19.4a.5.5,0,0,1-.5.5H14.4a.5.5,0,0,1-.5-.5h0v-5a1.6,1.6,0,0,0-3.2,0v5.1h0a.5.5,0,0,1-.5.5H4.8a.5.5,0,0,1-.5-.5V8.9L2.9,10a.5.5,0,0,1-.7-.1h0a.5.5,0,0,1,.1-.7l9.7-7a.5.5,0,0,1,.6,0Zm-3.1,9.8V8.2l-6.9-5-6.9,5V18.9H9.6V14.4a2.7,2.7,0,0,1,5.3,0v4.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.5" />
                        <path id="fill_home_def" data-name="fill home def" d="M19.1,8.2V18.9H14.9V14.4a2.7,2.7,0,0,0-5.3,0v4.5H5.3V8.2l6.9-5Z" transform="translate(0 0)" fill="#08a5f0" />
                    </g>
                </g>
            </svg>
        )
    }
    
    return (
        <svg id="home_active" viewBox="0 0 24 24" width="24px" height="24px">
            <g id="ic_home" data-name="ic home">
                <rect id="bg_home_act" data-name="bg_home act" width="24" height="24" fill="none" />
                <g id="home_def" data-name="home def">
                    <path id="str_home" data-name="str home" d="M22.2,9.1a.5.5,0,0,1,.1.7l-.4.2h-.3l-1.4-1V19.4a.5.5,0,0,1-.5.5H14.4a.5.5,0,0,1-.5-.5h0V14.4a1.6,1.6,0,0,0-3.2,0v5.1h0a.5.5,0,0,1-.5.5H4.8a.5.5,0,0,1-.5-.5V8.9L2.9,10a.5.5,0,0,1-.7-.1.5.5,0,0,1,.1-.7l9.7-7a.5.5,0,0,1,.6,0Zm-3.1,9.8V8.2l-6.9-5-6.9,5V18.9H9.6V14.4a2.7,2.7,0,0,1,5.3,0v4.5Z" transform="translate(0 0)" fill="#08a5f0" stroke="#08a5f0" strokeWidth="0.5" />
                    <path id="fill_home" data-name="fill home" d="M19.1,8.2V18.9H14.9V14.4a2.7,2.7,0,0,0-5.3,0v4.5H5.3V8.2l6.9-5Z" transform="translate(0 0)" fill="#cae9f9" />
                </g>
            </g>
        </svg>
    )
};
