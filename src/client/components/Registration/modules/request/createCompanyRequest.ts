import { default as axios, AxiosPromise } from 'axios'

type RegistrationFields = {
  email: string;
  password: string;
  taxID: string;
  principal: string;
  phone: string;
  name: string;
}

const createCompanyRequest = ({ email, password, taxID, principal, phone, name }: RegistrationFields): AxiosPromise =>
  axios({
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    url: 'http://localhost:5015/_api/v1/register',
    data: {
      email,
      password,
      taxID,
      principal,
      phone,
      name
    }
  })

export default createCompanyRequest