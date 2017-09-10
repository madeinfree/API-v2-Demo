import * as React from 'react'
import { Form, Field, reduxForm, InjectedFormProps } from 'redux-form'
import RegistrationButton from './registrationButton'
import createCompanyRequest from './modules/request/createCompanyRequest'

const Registration: React.StatelessComponent<InjectedFormProps> = (props) => (
  <div>
    <Form onSubmit={props.handleSubmit}>
      <div>
        name: <Field name='name' type='text' component='input'></Field>
      </div>
      <div>
        email: <Field name='email' type='text' component='input'></Field>
      </div>
      <div>
        password: <Field name='password' type='password' component='input'></Field>
      </div>
      <div>
        taxID: <Field name='taxID' type='text' component='input'></Field>
      </div>
      <div>
        principal: <Field name='principal' type='text' component='input'></Field>
      </div>
      <div>
        phone: <Field name='phone' type='text' component='input'></Field>
      </div>
    </Form>
    <RegistrationButton />
  </div>
)

export default reduxForm({
  form: 'registrationForm',
  onSubmit: createCompanyRequest
})(Registration)