import fetch from './fetch'
export default {
  getList (params) {
    return fetch.post('/file/list', params)
  }
}
