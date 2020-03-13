import * as React from "react";
import { Props } from './types';

export const IconPendingRequest: React.FC<Props> = ({active}) => (
    <svg id="pending_requests" data-name="pending requests" viewBox="0 0 19.9 18.2">
        <path id="pend_req" data-name="pend req" d="M20,1.7a.7.7,0,0,0,0-.3h0l-.2-.2h-.8L.5,10.1a.7.7,0,0,0-.4.7.7.7,0,0,0,.5.6l6.6,2.2v4.7a.7.7,0,0,0,.5.7H8a.8.8,0,0,0,.6-.3L11.5,15l5.2,1.7h.6a.7.7,0,0,0,.4-.5L20,1.7ZM15.6,4.3l-7.8,8-5-1.6Zm2.5-.4L16.3,15.1l-7-2.3ZM10,14.5,8.7,16.1v-2ZM19.2,1h0Z" transform="translate(0 -0.9)" fill={`${active ? '#08a5f0' : '#95969f'}`}/>
    </svg>
);