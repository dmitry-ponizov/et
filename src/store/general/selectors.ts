import { IGeneralState } from './types';
export const selectorGetCurrentPage = (auth: any) => {
    if (!auth || !auth.currentPage) {
      return null;
    }
    return auth.currentPage;
};

export const selectorSideBarStatus = (auth: any) => {
    return auth.sideBar;
};

export const getSessionIdSelector = (state: any) => {
  if(!state || !state.general || !state.general.sessionId) return null;
  return state.general.sessionId;
}

export const getLocalization = (state: any) => {
  if(!state || !state.general || !state.general.language) return null;
  return state.general.language
}
export const getAuthUserIdSelector = (state: any) => {
  if (!state.general || !state.general.currentUser || !state.general.currentUser.data || !Boolean(Object.keys(state.general.currentUser.data).length) || !state.general.currentUser.data.id) return null;
  return state.general.currentUser.data.id;
};

export const getUserIdSelector = (state: any) => {
  return state.general.userId;
}

export const getEmployeesSelector = (state: IGeneralState) => {
  if (!state || !state.employees || !state.employees.data) return null;
  return state.employees.data;
}

export const getEmployeesLoadingSelector = (state: IGeneralState) => {
  return state.employees.loading;
}

export const getLoginErrorSelector = (state: IGeneralState) => {
  return state.error;
}

export const getCurrentUserSelector = (state: IGeneralState) => {
    if(!state.currentUser || !state.currentUser.data || !Boolean(Object.keys(state.currentUser.data).length)) {
      return {}
    }
    return state.currentUser.data
}


export const getCurrentUserError = (state: IGeneralState) => {
  return state.currentUser.error;
}

export const lodadingCurrentUser = (state: IGeneralState) => {
    return state.currentUser.loading;
}

export const stationIdSelector = (state: IGeneralState) => {
    return state.stationID;
}

export const getEmployeesPagerSelector = (state: IGeneralState) => {
  return state.employees.pager;
}

export const getPermissionsSelector = (state: IGeneralState) => {
  return state.permissons.data;
}

export const getPermissionsLoadingSelector = (state: IGeneralState) => {
  return state.permissons.loading;
}