import axios from 'axios'
export function getPageToDo() {
  return axios.get('/api/pc/post/getPageToDo')
}
export function getPaginationList(params) {
  return axios.get(`/api/idcs/?page=${params.page}`)
}