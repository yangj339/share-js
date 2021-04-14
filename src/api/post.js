import axios from 'axios'
export function getIndex() {
  return axios.get('/api/index')
}
export function getPaginationList(params) {
  return axios.get(`/api/idcs/?page=${params.page}`)
}