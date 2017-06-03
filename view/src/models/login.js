import { login } from '../services/login'
import { routerRedux } from 'dva/router'
// import { queryURL } from '../utils'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      console.log("pre showLoginLoading");
      yield put({ type: 'showLoginLoading' })
      const resp = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      console.log(resp.data);
      if (resp.data.Code == 0) {
        console.log("登录成功");
      //   // const from = queryURL('from')
      //   // yield put({ type: 'app/query' })
      //   // if (from) {
      //   //   yield put(routerRedux.push(from))
      //   // } else {
      //   //   yield put(routerRedux.push('/dashboard'))
      //   // }
      // } else {
      //   throw data
      }
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },
}
