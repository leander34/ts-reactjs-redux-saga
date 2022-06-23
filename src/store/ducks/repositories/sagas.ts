import { call, put } from 'redux-saga/effects'
import axios from '../../../services/axios'
import { loadSuccess, loadFailure } from './actions'

export function* load() {
    try {
        const { data } = yield call(axios.get, 'users/diego3g/repos')
        yield put(loadSuccess(data))
    } catch (error) {
        yield put(loadFailure())
    }
}
