import * as dadaApi from 'api/daApi'
import * as t from './actionTypes'
import * as rm from 'api/rmApi'
export const getFullOrgData = (query: string) => {
    return (dispatch: any) => {
        dadaApi.getOrganization(query)
            .then((data) => {
                dispatch({
                    type: t.ORG_FULL_DATA,
                    payload: data,
                })

            })
            .catch((err) => console.log(err))
    }
}

type dataType = {
    userEmail: string,
    userPhoneNumber: string,
    fullName: string,
    password: string
}


export const getRegisterUser = (data: dataType) => {
    return (dispatch: any) => {
        rm.getRegister(data)
            .then((data: any) => {
                console.log('data', data)
                /* пока не будем ничего диспатчить, просто выведем в консоль */
                /* dispatch({
                    type: t.ORG_FULL_DATA,
                    payload: data,
                }) */

            })
            /* обработка ошибок такая же как и везде, проверяем наличие ошибки, 
            ее номер и в зависимости от ошибки можно задиспатчить ее или 
            задиспатчить любую ошибку, а далее уже с ней работать */
            .catch((err) => console.log(err))
    }
}

