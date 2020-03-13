import * as React from "react";
import { Props } from './types';

export const IconDecline: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="unlike_deactive" width="17px" height="18px" viewBox="0 0 17 18" version="1.1">
                <path d="M16.6,2.4A2.5,2.5,0,0,0,14.1.3H3.7A2.2,2.2,0,0,0,1.4,2.2L.4,8.9a2.2,2.2,0,0,0,2.2,2.6H6.1v2.3a3,3,0,0,0,3,3,.7.7,0,0,0,.7-.4L12.6,10h1.5a2.5,2.5,0,0,0,2.5-2.1h0V2.5ZM8.7,15.2a1.5,1.5,0,0,1-1-1.4v-3a.7.7,0,0,0-.7-.7H2.6a.8.8,0,0,1-.8-.9l1-6.7a.8.8,0,0,1,.8-.6h7.7V9.1Zm6.5-7.5a1,1,0,0,1-1,.8H12.9V1.8h1.3a1,1,0,0,1,1,.8Z" transform="translate(-0.4 -0.2)" fill="#9ea0b4" />
            </svg>
        );
    }
    return (
        <svg id="unlike_active" width="17px" height="18px" viewBox="0 0 17 18" version="1.1">
            <path d="M16.6,2.4A2.5,2.5,0,0,0,14.1.3H3.7A2.2,2.2,0,0,0,1.4,2.2L.4,8.9a2.2,2.2,0,0,0,2.2,2.6H6.1v2.3a3,3,0,0,0,3,3,.7.7,0,0,0,.7-.4L12.6,10h1.5a2.5,2.5,0,0,0,2.5-2.1h0V2.5ZM8.7,15.2a1.5,1.5,0,0,1-1-1.4v-3a.8.8,0,0,0-.8-.8H2.6a.8.8,0,0,1-.8-.9l1-6.7a.8.8,0,0,1,.8-.6h7.7V9.1Zm6.5-7.5a1,1,0,0,1-1,.8H12.9V1.8h1.3a1,1,0,0,1,1,.8Z" transform="translate(-0.4 -0.2)" fill="#f64540" />
        </svg>

    )
}