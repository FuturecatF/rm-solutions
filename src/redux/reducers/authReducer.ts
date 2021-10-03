import * as t from '../actionTypes'

interface DataState {
	organizationData: any[];
	isOrgRepresent: boolean
	isSecondAuth: {
		email: null | string,
		phone: null | string,
		fullname: null | string,
		password: null | string
	}
}

interface DataAction {
	type: string;
	payload?: any;
}

export const initialState: DataState = {
	organizationData: [],
	isOrgRepresent: false,
	isSecondAuth: {
		email: null,
		phone: null,
		fullname: null,
		password: null
	}
};

export const authReducer = (state = initialState, action: DataAction) => {
	switch (action.type) {
		case t.ORG_FULL_DATA:
			return {
				...state,
				organizationData: [action.payload.suggestions]
			}
		case t.CHECK_ORG_REPRESENT:
			return {
				...state,
				isOrgRepresent: !state.isOrgRepresent
			}
		case t.GET_REGISTER_DATA:
			console.log(action.payload)
			return {
				...state,
				isSecondAuth: { ...action.payload }
			}
		default:
			return state;
	}
};
