import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import types from "../redux/types";

export function apiReq(
    endpoint,
    data,
    method,
    headers,
    requestOptions = {}
) {
    return new Promise(async (res, rej) => {
        const getTokenHeaders = await getHeaders();
        const headers = {
            ...getTokenHeaders,
            ...headers
        };

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data,
                headers
            };
        }

        axios[method](endpoint, data, { headers })
            .then(result => {
                const { data } = result
                if (data.status === false) {
                    return rej(data)
                }
                return res(data)
            }).catch(error =>  {
                console.log('ger erro', error);
                console.log(error && error.response, "the error message");
                if(error && error.response && error.response.status === 401){
                    dispatch({
                        type: types.CLEAR_REDUX_STATE,
                        payload: {}
                    })

                    dispatch({
                        type: types.NO_INTERNET,
                        payload: {internetConnection: true}
                    })
                }

                if(error && error.response && error.response.data){
                    if(!error.response.data.message){
                        return rej({...error.message.data, msg:error.response.data.message })
                    }
                }
            })
    })

}