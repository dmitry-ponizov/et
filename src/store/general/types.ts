import { CommonType } from '../../constants/common';

export interface IGeneralState {
     loading: boolean | null;
     error: string | null;
     sessionId: string | null;
     currentPage: string;
     sideBar: boolean;
     language: string;
     userId: string; 
     employees: any;
     currentUser: {
          data: {[index: string] : string};
          loading: boolean;
          error: string | null
     },
     stationID: string;
     permissons: {
          data: CommonType | null;
          loading: boolean;
          error: string | null
     }
}
