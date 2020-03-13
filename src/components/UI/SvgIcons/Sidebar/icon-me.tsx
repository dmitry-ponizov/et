import * as React from "react";
import { Props } from '../types';

export const IconMe: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="my_prof_def" data-name="my prof def" viewBox="0 0 24 24" width="24px" height="24px">
                <g id="ic_my-profile" data-name="ic my-profile">
                    <rect id="bg_prof_def" data-name="bg prof def" width="24" height="24" fill="none" />
                    <path id="prof_def" data-name="prof def" d="M5.7,19.1a9.6,9.6,0,0,0,16.5-6.6A9.6,9.6,0,0,0,3,12.5,9.4,9.4,0,0,0,5.6,19Zm6.9,1.8a8.5,8.5,0,0,1-5.5-2c2.5-.8,3.4-1.8,3.7-2.5a4.1,4.1,0,0,0,1.6.3h.1a4.1,4.1,0,0,0,1.7-.4c.3.7,1.2,1.7,3.8,2.5A8.4,8.4,0,0,1,12.6,20.9ZM9.5,10.7h0c.1-2.9,2.3-3.1,2.9-3.1h.2c.7,0,2.8.2,2.9,3.1h0s.3,2.7-1,4.1a2.6,2.6,0,0,1-2,.8h0a2.6,2.6,0,0,1-2-.8C9.2,13.4,9.5,10.8,9.5,10.7Zm3.1-6.7a8.5,8.5,0,0,1,8.5,8.4A8.4,8.4,0,0,1,19,18c-3.6-1-3.7-2.3-3.7-2.3h0l.2-.2c1.5-1.7,1.3-4.6,1.2-4.9a3.9,3.9,0,0,0-4-4.1h-.2a3.9,3.9,0,0,0-4,4.1c0,.3-.3,3.2,1.2,4.9l.3.3c-.1.3-.7,1.3-3.7,2.2a8.3,8.3,0,0,1-2.1-5.5A8.5,8.5,0,0,1,12.6,4.1Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2" />
                </g>
            </svg>

        )
    }
    return (
        <svg id="my_prof_act" data-name="my prof act" viewBox="0 0 24 24" width="24px" height="24px">
            <rect id="bg_prof_act" data-name="bg prof act" width="24" height="24" fill="none" />
            <g id="profile_act" data-name="profile act">
                <path id="str_prof_act" data-name="str prof act" d="M12.6,2.8a9.7,9.7,0,0,0-9.7,9.7,9.5,9.5,0,0,0,2.6,6.6h.1a9.6,9.6,0,0,0,6.8,3h.2a9.6,9.6,0,0,0,6.7-2.7A9.6,9.6,0,0,0,12.6,2.8Zm5.5,16.1A8.5,8.5,0,0,1,12.6,21h0A8.6,8.6,0,0,1,7,19h0c2.5-.8,3.3-1.8,3.6-2.4h.1a4,4,0,0,0,1.6.3h.1a4,4,0,0,0,1.7-.4h.1c.3.7,1.2,1.7,3.7,2.4h0ZM9.4,10.7h0c.1-3,2.3-3.2,3-3.2h.2c.9,0,2.9.3,3,3.2,0,.1.3,2.8-1,4.2a2.7,2.7,0,0,1-2.1.8h-.1a2.7,2.7,0,0,1-1.9-.8C9.3,13.7,9.3,11.6,9.4,10.7ZM19,17.9c-3.1-.9-3.5-1.9-3.6-2.2l.2-.2a7.1,7.1,0,0,0,1.3-5A4,4,0,0,0,13,6.4h-.6a4,4,0,0,0-4,3.9c0,.1,0,.2,0,.3h0a6.6,6.6,0,0,0,1.2,4.8l.3.3c-.1.3-.7,1.2-3.6,2.1a8.2,8.2,0,0,1-2-5.4,8.3,8.3,0,0,1,8.2-8.4h.1A8.4,8.4,0,0,1,21,12.4,8.3,8.3,0,0,1,19,17.9Z" transform="translate(0 0)" fill="#08a5f0" />
                <path id="body_prof_act" data-name="body prof act" d="M14.3,16.3h-.1a4,4,0,0,1-1.7.4h-.1a4,4,0,0,1-1.6-.3h-.1c-.3.7-1.2,1.6-3.6,2.4H7a8.6,8.6,0,0,0,5.5,2h0a8.5,8.5,0,0,0,5.5-2.1h0C15.5,17.9,14.6,16.9,14.3,16.3Z" transform="translate(0 0)" fill="#e4f6ff" />
                <path id="head_prof_act" data-name="head prof act" d="M12.5,15.7a2.7,2.7,0,0,0,2.1-.8c1.3-1.4,1-4.1,1-4.2-.1-2.9-2.1-3.2-3-3.2h-.2c-.7,0-2.9.2-3,3.2h0c-.1.8-.1,2.9,1,4.1a2.7,2.7,0,0,0,1.9.8Z" transform="translate(0 0)" fill="#e4f6ff" />
            </g>
        </svg>
    )
};
