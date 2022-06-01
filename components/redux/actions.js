import axios from "axios";
export const GET_MOVIES = 'GET_MOVIES';
import Toast from 'react-native-simple-toast';
import { showError } from '../utils/helperfunction'

export const getMovies = () => {
    try {
        return async dispatch => {
            await axios.get(`${baseUrl}`)
                .then(res => {
                    console.log('fetch data');
                    if (res.data.status == 200) {
                        dispatch({
                            type: GET_MOVIES,
                            payload: res.data.data
                        })
                    } else {
                        showError('Movies Data Not found..')
                    }
                }).catch((error) => {
                    dispatch({
                        type: GET_MOVIES,
                        payload: error,
                    });
                    throw error;
                });
        }
    } catch (err) {
        console.log('get error in api', err);
    }
}