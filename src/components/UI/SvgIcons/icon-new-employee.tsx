import * as React from "react";

interface IIconNewEmployee  {
    color: string;
}

export const IconNewEmployee: React.FC<IIconNewEmployee> = ({color}) => (
    <svg width="15" height="13" viewBox="0 0 15 13">
        <path fill={color} fillRule="evenodd" d="M12.816 2.085H9.74V1.06C9.74.493 9.281.034 8.715.034H5.639c-.566 0-1.025.46-1.025 1.026v1.025H1.538C.688 2.085 0 2.773 0 3.623v8.227a1 1 0 0 0 1 1h12.354a1 1 0 0 0 1-1V3.623c0-.85-.689-1.538-1.538-1.538zM5.639 1.06h3.076v1.025H5.639V1.06zm7.69 10.765H1.024V6.186h1.026v2.05h3.075v-2.05h4.101v2.05h3.076v-2.05h1.025v5.639zM3.075 6.186H4.1v1.025H3.076V6.186zm7.177 0h1.025v1.025h-1.025V6.186zm2.05-1.025H1.025V3.623c0-.283.23-.513.513-.513h11.278c.283 0 .512.23.512.513V5.16h-1.025z" />
    </svg>
);