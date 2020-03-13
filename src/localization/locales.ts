import {addLocaleData} from 'react-intl';
import * as enLocale  from 'react-intl/locale-data/en';
import * as arLocale  from 'react-intl/locale-data/ar';
import en from './en';
import ar from './ar';
import { CommonType } from '../constants/common';


addLocaleData([...enLocale, ...arLocale]);

// generating "one string" localization ids for intl
const generateLocale = (locale: CommonType) => {
    const updatedLocale: CommonType = { ...locale };
  
    const parseChunk = function(chunk: any, chunkName: string) {
      Object.keys(chunk).forEach((item: any) => {
        const concatName = `${chunkName}.${item}`.replace(/^\./, '');
  
        if (typeof chunk[item] === 'string') {
          updatedLocale[concatName] = chunk[item];
        } else {
          parseChunk(chunk[item], concatName);
        }
      });
    };
  
    parseChunk(locale, '');
  
    return updatedLocale;
  };
  
export const locales: CommonType = {
    en: generateLocale(en),
    ar: generateLocale(ar),
};
  