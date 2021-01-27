import { baseApiClient } from '../../../api/clients';

export function getDatamuse() {
    return async (dispatch, getState) => {
        try {
            const res = await baseApiClient('datamuse/ml=test')
            console.log('res', res);
        } catch (error) {
            throw (error)
        }
    }
}