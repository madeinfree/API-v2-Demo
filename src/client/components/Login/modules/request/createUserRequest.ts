import { default as axios, AxiosPromise } from 'axios'

type LoginFields = {
  email: string;
  password: string;
}

const createUserRequest = ({ email, password }: LoginFields): AxiosPromise =>
  axios({
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    withCredentials: true,
    url: 'http://localhost:5015/_api/v1/login',
    data: {
      email,
      password
    }
  })

export default createUserRequest