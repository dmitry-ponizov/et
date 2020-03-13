import * as React from "react";
import { Props } from './types';

export const IconPunchInOut: React.FC<Props> = ({active}) => (
    <svg id="punch_in_out" data-name="punch in_out" viewBox="0 0 20 20">
        <path id="oval_punch" d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18.6a8.6,8.6,0,1,1,6.1-2.5A8.6,8.6,0,0,1,10,18.6Z" transform="translate(0 0)" fill={`${active ? '#08a5f0' : '#95969f'}`} />
        <path id="time" d="M8.2,11.5,9.6,10V6.9a.8.8,0,1,1,1.6,0v3.5a.9.9,0,0,1-.2.6L9.3,12.7a.7.7,0,0,1-1.1,0A.9.9,0,0,1,8.2,11.5Z" transform="translate(0 0)" fill={`${active ? '#08a5f0' : '#95969f'}`} />
    </svg>
);