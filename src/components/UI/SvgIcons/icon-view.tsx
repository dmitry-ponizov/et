import * as React from "react";
import { Props } from './types';

export const IconView: React.FC<Props> = ({active}) => {
    if(!active) {
        return (
            <svg id="IconView" width="20px" height="15px" viewBox="0 0 20 15" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-961.000000, -19.000000)" fill="#9EA0B4">
                    <g transform="translate(250.000000, 0.000000)">
                        <g transform="translate(705.000000, 19.000000)">
                            <g transform="translate(6.000000, 0.000000)">
                                <g>
                                    <path d="M19.5960115,6.4935 C19.4340111,6.228 15.5460115,0 9.89851196,0 C4.25101151,0 0.363011963,6.228 0.201011963,6.4935 C-0.0670039875,6.9279939 -0.0670039875,7.476507 0.201011963,7.911 C0.363011963,8.1765 4.25101151,14.3819996 9.89401151,14.4 L9.92101241,14.4 C15.5505124,14.4 19.438512,8.172 19.6005124,7.9065 C19.8653037,7.47225675 19.8635631,6.9260472 19.5960115,6.4935 L19.5960115,6.4935 Z M9.92101241,13.05 L9.92101241,13.05 C4.97101241,13.05 1.37101196,7.2 1.37101196,7.2 C1.37101196,7.2 4.97101241,1.35 9.92101241,1.35 C14.871012,1.35 18.4710115,7.2 18.4710115,7.2 C18.4710115,7.2 14.857512,13.05 9.92101241,13.05 Z" id="Fill-602"></path>
                                    <path d="M9.89848946,3.6 C7.91026436,3.6 6.29848946,5.2117749 6.29848946,7.2 C6.29848946,9.1882251 7.91026436,10.8 9.89848946,10.8 C11.8867146,10.8 13.4984895,9.1882251 13.4984895,7.2 C13.4984895,5.2117749 11.8867146,3.6 9.89848946,3.6 Z M9.89848946,9.45 C8.65584866,9.45 7.64848946,8.4426408 7.64848946,7.2 C7.64848946,5.9573592 8.65584866,4.95 9.89848946,4.95 C11.1411303,4.95 12.1484895,5.9573592 12.1484895,7.2 C12.1484895,8.4426408 11.1411303,9.45 9.89848946,9.45 L9.89848946,9.45 Z" id="Fill-603"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        )
    }

    return (
        <svg width="20px" height="15px" viewBox="0 0 20 15" version="1.1" >
            <g id="Requests" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Requests_Authorization-History" transform="translate(-1370.000000, -39.000000)" fill="#1161BE">
                    <g id="header" transform="translate(250.000000, 0.000000)">
                        <g id="view" transform="translate(705.000000, 19.000000)">
                            <g id="ic_view-copy" transform="translate(415.000000, 20.000000)">
                                <g id="ic_view">
                                    <path d="M19.5960115,6.4935 C19.4340111,6.228 15.5460115,0 9.89851196,0 C4.25101151,0 0.363011963,6.228 0.201011963,6.4935 C-0.0670039875,6.9279939 -0.0670039875,7.476507 0.201011963,7.911 C0.363011963,8.1765 4.25101151,14.3819996 9.89401151,14.4 L9.92101241,14.4 C15.5505124,14.4 19.438512,8.172 19.6005124,7.9065 C19.8653037,7.47225675 19.8635631,6.9260472 19.5960115,6.4935 L19.5960115,6.4935 Z M9.92101241,13.05 L9.92101241,13.05 C4.97101241,13.05 1.37101196,7.2 1.37101196,7.2 C1.37101196,7.2 4.97101241,1.35 9.92101241,1.35 C14.871012,1.35 18.4710115,7.2 18.4710115,7.2 C18.4710115,7.2 14.857512,13.05 9.92101241,13.05 Z" id="Fill-602"></path>
                                    <path d="M9.89848946,3.6 C7.91026436,3.6 6.29848946,5.2117749 6.29848946,7.2 C6.29848946,9.1882251 7.91026436,10.8 9.89848946,10.8 C11.8867146,10.8 13.4984895,9.1882251 13.4984895,7.2 C13.4984895,5.2117749 11.8867146,3.6 9.89848946,3.6 Z M9.89848946,9.45 C8.65584866,9.45 7.64848946,8.4426408 7.64848946,7.2 C7.64848946,5.9573592 8.65584866,4.95 9.89848946,4.95 C11.1411303,4.95 12.1484895,5.9573592 12.1484895,7.2 C12.1484895,8.4426408 11.1411303,9.45 9.89848946,9.45 L9.89848946,9.45 Z" id="Fill-603"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
};
