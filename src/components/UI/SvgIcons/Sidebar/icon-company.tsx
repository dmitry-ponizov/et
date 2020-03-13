import * as React from "react";
import { Props } from '../types';

export const IconCompany: React.FC<Props> = ({ active }) => {
    if (!active) {
        return (
            <svg id="company_default" viewBox="0 0 24 24" width="24px" height="24px" >
            <g id="ic_company" data-name="ic company">
              <rect id="bg_company_default" width="24" height="24" fill="none"/>
              <g id="office-block">
                <path id="Shape_of13" d="M20.6,7.5H15V3.4a.4.4,0,0,0-.4-.4H4.4a.4.4,0,0,0-.4.4V20.6a.4.4,0,0,0,.4.4H20.6a.4.4,0,0,0,.4-.4V7.8A.4.4,0,0,0,20.6,7.5Zm-6.4.4V20.3H4.8V3.7h9.4V7.8Zm6,12.4H15V8.2h5.3Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.4"/>
                <path id="Path_of12" d="M16.5,11.7h2.4a.4.4,0,1,0,0-.7H16.5a.4.4,0,1,0,0,.7Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path__of11" d="M16.5,14.7h2.4a.4.4,0,1,0,0-.7H16.5a.4.4,0,1,0,0,.7Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of10" d="M16.5,17.7h2.4a.4.4,0,1,0,0-.7H16.5a.4.4,0,1,0,0,.7Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of9" d="M6.5,16.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,6.5,16.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path__of8" d="M9.4,16.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,9.4,16.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path__of7" d="M12.5,16.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,12.5,16.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of6" d="M6.5,12.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,6.5,12.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of5" d="M9.4,12.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,9.4,12.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of4" d="M12.5,12.5a.4.4,0,0,0,.4-.4v-.8a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,12.5,12.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of3" d="M6.5,8.5a.4.4,0,0,0,.4-.4V7.4a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,6.5,8.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of2" d="M9.4,8.5a.4.4,0,0,0,.4-.4V7.4a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,9.4,8.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
                <path id="Path_of1" d="M12.5,8.5a.4.4,0,0,0,.4-.4V7.4a.4.4,0,0,0-.7,0v.8A.4.4,0,0,0,12.5,8.5Z" transform="translate(0 0)" fill="#fff" stroke="#fff" strokeWidth="0.2"/>
              </g>
            </g>
          </svg>          
        )
    }
    return (
        <svg id="company_active" data-name="company active"  viewBox="0 0 24 24" width="24px" height="24px">
        <rect id="bg_comp_active" data-name="bg comp active" width="24" height="24" fill="none"/>
        <path id="building" d="M20.6,7.3H15.2V3.4a.6.6,0,0,0-.6-.6H4.4a.6.6,0,0,0-.6.6V20.6a.6.6,0,0,0,.6.6H20.6a.6.6,0,0,0,.6-.6V7.8h0A.6.6,0,0,0,20.6,7.3Zm-.4,13H15V8.2h5.3Z" transform="translate(0 0)" fill="#08a5f0"/>
        <polygon id="wall" points="14.2 7.9 14.2 20.3 4.8 20.3 4.8 3.7 14.2 3.7 14.2 7.8 14.2 7.9" fill="#e4f6ff"/>
        <g id="windows_1" data-name="windows 1">
          <path id="co9" d="M6.3,15.1l-.2.2h0v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8H7A.5.5,0,0,0,6.3,15.1Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co8" d="M9.2,15.1l-.2.2H9v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8h0A.5.5,0,0,0,9.2,15.1Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co7" d="M12.3,15.1l-.2.2h0v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8h0A.5.5,0,0,0,12.3,15.1Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co6" d="M6.7,11H6.3l-.2.2v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8H7Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co5" d="M9.6,11H9.2l-.2.2v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8h0Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co4" d="M12.7,11h-.4l-.2.2v.8a.5.5,0,0,0,.4.5h0a.5.5,0,0,0,.5-.5v-.8h0Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co3" d="M6.7,7.1H6.3l-.2.2h0v.8a.5.5,0,0,0,.4.4h0A.5.5,0,0,0,7,8.1V7.4H7Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co2" d="M9.6,7.1H9.2L9,7.4H9v.8a.5.5,0,0,0,.4.4h0a.5.5,0,0,0,.5-.5V7.4h0Z" transform="translate(0 0)" fill="#08a5f0"/>
          <path id="co1" d="M13,7.4l-.3-.2h-.4l-.2.2h0v.8a.5.5,0,0,0,.4.4h0a.5.5,0,0,0,.5-.5V7.4Z" transform="translate(0 0)" fill="#08a5f0"/>
        </g>
        <g id="windows_2" data-name="windows 2">
          <rect id="w1" x="15.8" y="10.8" width="3.8" height="1" rx="0.5" ry="0.5" fill="#08a5f0"/>
          <rect id="w2" x="15.8" y="13.8" width="3.8" height="1" rx="0.5" ry="0.5" fill="#08a5f0"/>
          <rect id="w3" x="15.8" y="16.8" width="3.8" height="1" rx="0.5" ry="0.5" fill="#08a5f0"/>
        </g>
      </svg>
    )
};
