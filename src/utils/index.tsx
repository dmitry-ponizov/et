import React from 'react';
import { Table } from "semantic-ui-react";
import moment from 'moment';
import { mobileResulution } from '../constants/common';


export const formDataRequestFormat = (data: any, sessionId: string) => {
    let formData = new FormData();
    const params = JSON.stringify(Object.assign({}, data));
    formData.append('json', params);
    formData.append('SessionID', sessionId);
    return formData;
};

export const issetResponseData = (response: any) => {
    if (!response || !response.data || !response.data.api_retval || !response.data.api_retval.length || typeof response.data.api_retval === 'boolean' || !(response.status === 200)) {
        return false;
    }
    return true;
};

export const issetResponseDataWithEmptyArray = (response: any) => {
    if (!response || !response.data || !response.data.api_retval || typeof response.data.api_retval === 'boolean' || !(response.status === 200)) {
        return false;
    }
    return true;
};
export const getKeySortFieldHelper = (requestData: any) => {
    if (!requestData || !requestData[0] || !requestData[0].filter_sort || !requestData[0].filter_sort.length) return ''
    return Object.keys(requestData[0].filter_sort[0])[0];
};

export const getValueSortFieldHelper = (requestData: any) => {
    if (!requestData || !requestData[0] || !requestData[0].filter_sort || !requestData[0].filter_sort.length) return ''
    return Object.values(requestData[0].filter_sort[0])[0];
};

export const parseDateFromString = (date: string) => {
    return new Date(date.split('-').reverse().join('-'));
};

export const timeConverter = (totalSeconds: any) => {
    let hours: string | number = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes: string | number = Math.floor(totalSeconds / 60);
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    return hours + ":" + minutes;
};

export const secondsToMinutesConverter = (seconds: string | number, minute: string, minutes: string) => {
    const m = Math.floor(Number(seconds) % 3600 / 60);
    return m > 0 ? m + (m === 1 ? ` ${minute}` : ` ${minutes}`) : "";
}

export const secondsToHoursConverter = (seconds: string | number, hour: string, hours: string) => {
    const h = Math.floor(Number(seconds) % (3600 * 24) / 3600);
    return h > 0 ? h + (h === 1 ? ` ${hour}` : ` ${hours}`) : "";
}
export const secondsToDaysConverter = (seconds: string | number, day: string, days: string) => {
    const d = Math.floor(Number(seconds) / (3600 * 24));
    return d > 0 ? d + (d === 1 ? ` ${day}` : ` ${days}`) : "";
}

export const flattenMessages = ((nestedMessages: any, prefix = '') => {
    if (nestedMessages === null) {
        return {};
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value });
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }

        return messages;
    }, {});
});

export const formatMonthTitle = (date: any) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
}


export const firstDayForMonth = () => {
    return formatMonthTitle(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
}

export const firstDayForMonthDateFormat = () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}

export const validateFieldData = (value: any, i: any, className?: string) => {
    if ((typeof value === 'undefined' || value === false || value === '' || value === null)) {
        return <Table.Cell key={i}></Table.Cell>;
    } else if (value) {
        return <Table.Cell key={i} className={className}>{value}</Table.Cell>;
    } else {
        return null;
    }
};


export const isObject = (object: any) => {
    if (typeof object !== 'object' || Object.keys(object).length === 0) return false;
    return true;
}


export const getCurrentMonth = () => {
    return parseInt(moment().format('M'));
}

export const getCurrentYear = () => {
    return parseInt(moment().format('YYYY'));
}

export const lengthService = (hire_date: string, years: string) => {
    if (hire_date) {
        let date: any = new Date(hire_date.split('/').reverse().join('/'))
        const today = new Date();
        if (isNaN(date.getTime())) {
            date = new Date(hire_date.split('-').reverse().join('-'))
            if (isNaN(date.getTime())) {
                return `0 ${years}`;
            }
        }
        return (today.getFullYear() - date.getFullYear()).toString() + ` ${years}`
    }
    return `0 ${years}`;
}

export const isRtl = (lang: string) => {
    return lang === 'ar' ? true : false
}

export const codesHandler = (codes: string[] | null) => {
    if (codes) {
        return codes.join(' | ')
    }
    return null
}

export const shortTitle = (value: string | undefined, size: number) => {
    if (value && value.length > size) {
        const str = value.slice(0, size);
        return str + ' ...';
    }
    return value;
}

export const isMobile = (size: any) => {
    return size.width ? size.width < mobileResulution : false;
}

// export const urlBase64ToUint8Array = (base64String: string) => {
//     const padding = '='.repeat((4 - base64String.length % 4) % 4);
//     const base64 = (base64String + padding)
//         .replace(/\-/g, '+')
//         .replace(/_/g, '/')
//         ;
//     const rawData: any = window.atob(base64);
//     return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
// }