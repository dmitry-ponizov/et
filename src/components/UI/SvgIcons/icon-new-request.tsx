import * as React from "react";
import { Props } from './types';

export const IconNewRequest: React.FC<Props> = ({active}) => (
    <svg id="new_request" data-name="new request" viewBox="0 0 20 20">
        <path id="oval_new" d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18.6a8.6,8.6,0,1,1,6.1-2.5A8.6,8.6,0,0,1,10,18.6Z" transform="translate(0 0)" fill={`${active ? '#08a5f0' : '#95969f'}`} />
        <path id="plus" d="M13.6,9.5H10.9V6.8a.7.7,0,1,0-1.4,0V9.5H6.8a.7.7,0,1,0,0,1.4H9.5v2.7a.7.7,0,0,0,1.4,0V10.9h2.7a.7.7,0,1,0,0-1.4Z" transform="translate(0 0)" fill={`${active ? '#08a5f0' : '#95969f'}`} />
    </svg>

);