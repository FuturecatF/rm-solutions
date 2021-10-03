import * as t from './actionTypes'
import * as I from './interfaces/AuthState'
export const getOrganizationData = (data : any) => {
	return {
		type: t.ORG_FULL_DATA,
		payload: data	
	};
}

export const checkOrgRepresent = () => {
	return {
		type: t.CHECK_ORG_REPRESENT,	
	};
}

export const getRegisterData = (data: I.AuthState) => {
	return {
		type: t.GET_REGISTER_DATA,
		payload: data
	};
}

export const postRegisterUser = (data: I.AuthState) => {
	return {
		type: t.GET_REGISTER_DATA,
		payload: data
	};
}