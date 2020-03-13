import * as React from "react";
import { Props } from './types';

export const IconCancelRequest: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="IconCancelRequest" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-1208.000000, -16.000000)">
                        <g transform="translate(250.000000, 0.000000)">
                            <g transform="translate(918.000000, 16.000000)">
                                <g transform="translate(40.311475, 0.934426)">
                                    <g transform="translate(0.000000, 0.000000)">
                                        <g transform="translate(0.139344, 0.065574)">
                                            <g transform="translate(0.549180, 0.000000)">
                                                <path d="M17.9631148,16.192623 C17.9631148,17.170377 17.170377,17.9631148 16.192623,17.9631148 L1.80737705,17.9631148 C0.829622951,17.9631148 0.0368852459,17.170377 0.0368852459,16.192623 L0.0368852459,1.80737705 C0.0368852459,0.829622951 0.829622951,0.0368852459 1.80737705,0.0368852459 L16.192623,0.0368852459 C17.170377,0.0368852459 17.9631148,0.829622951 17.9631148,1.80737705 L17.9631148,16.192623 Z" id="Path" stroke="#9EA0B4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M0.368852459,3.57786885 L17.852459,3.57786885" id="Path" stroke="#9EA0B4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M2.13934426,1.80737705 L4.79508197,1.80737705" id="Path" stroke="#9EA0B4" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <circle id="Oval" fill="#9EA0B4" fillRule="nonzero" cx="11.4897541" cy="1.80737705" r="1"></circle>
                                                <circle id="Oval" fill="#9EA0B4" fillRule="nonzero" cx="13.7028689" cy="1.80737705" r="1"></circle>
                                                <circle id="Oval" fill="#9EA0B4" fillRule="nonzero" cx="15.9159836" cy="1.80737705" r="1"></circle>
                                            </g>
                                            <path d="M8.02567213,12.0321885 L11.0724672,9.06617213" id="Path" stroke="#9EA0B4" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.0726885,12.0321885 L8.02589344,9.06617213" id="Path" stroke="#9EA0B4" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                        <circle id="IconCancelRequestCircle" stroke="#9EA0B4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" cx="9.68852459" cy="10.6147541" r="4"></circle>
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
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
            <g id="Requests" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1208.000000, -16.000000)">
                    <g id="header" transform="translate(250.000000, 0.000000)">
                        <g transform="translate(918.000000, 17.000000)">
                            <g transform="translate(40.000000, 0.000000)">
                                <g transform="translate(0.000000, 0.000000)">
                                    <g id="Group" transform="translate(0.139344, 0.065574)">
                                        <g transform="translate(0.549180, 0.000000)">
                                            <path d="M17.9631148,16.192623 C17.9631148,17.170377 17.170377,17.9631148 16.192623,17.9631148 L1.80737705,17.9631148 C0.829622951,17.9631148 0.0368852459,17.170377 0.0368852459,16.192623 L0.0368852459,1.80737705 C0.0368852459,0.829622951 0.829622951,0.0368852459 1.80737705,0.0368852459 L16.192623,0.0368852459 C17.170377,0.0368852459 17.9631148,0.829622951 17.9631148,1.80737705 L17.9631148,16.192623 Z" id="Path" stroke="#F64540" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M0.368852459,3.57786885 L17.852459,3.57786885" id="Path" stroke="#F64540" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M2.13934426,1.80737705 L4.79508197,1.80737705" id="Path" stroke="#F64540" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <circle id="Oval" fill="#F64540" fillRule="nonzero" cx="11.4897541" cy="1.80737705" r="1"></circle>
                                            <circle id="Oval" fill="#F64540" fillRule="nonzero" cx="13.7028689" cy="1.80737705" r="1"></circle>
                                            <circle id="Oval" fill="#F64540" fillRule="nonzero" cx="15.9159836" cy="1.80737705" r="1"></circle>
                                        </g>
                                        <path d="M8.02567213,12.0321885 L11.0724672,9.06617213" id="Path" stroke="#F64540" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M11.0726885,12.0321885 L8.02589344,9.06617213" id="Path" stroke="#F64540" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <circle id="Oval" stroke="#F64540" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" cx="9.68852459" cy="10.6147541" r="4"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
};
