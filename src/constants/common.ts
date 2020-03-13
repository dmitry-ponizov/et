export const mobileResulution = 768;

export const slugifySettings = {
    replacement: '_',  
    remove: /[*+~.()'"!:@]/g,    
    lower: true     
};

export const employeesColumns = ["employee_number", "full_arabic_name", "default_department", "status", "full_name"]

export const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export const AscSort = 'asc';
export const DescSort = 'desc';

export const elementsAmount = 20

 // eslint-disable-next-line
export const emailRegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
export const phoneRegExp = new RegExp(/^\d+$/)


export type CommonType = {[index: string]: any}

export const vapidPublicKey = 'BL_VS63x-5R0nEP1IKd1d2ej1u_6zGzPt2H_Ty5Sen_s7evPmJJjZqa8Nb00eSgpiV3mdNBuPY6d1CDvYPb20h0'