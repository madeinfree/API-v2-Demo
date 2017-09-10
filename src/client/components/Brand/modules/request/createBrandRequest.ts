import { default as axios, AxiosPromise } from 'axios'

const createBrandRequest = (): AxiosPromise =>
  axios({
    method: 'post',
    url: 'http://localhost:5015/api/v1/brands',
    withCredentials: true,
    data: {
      'title': 'runner'
    }
  })
export default createBrandRequest