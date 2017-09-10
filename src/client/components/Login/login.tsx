import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Field, reduxForm, InjectedFormProps } from 'redux-form'
import LoginButton from './button'

import createUserRequest from './modules/request/createUserRequest'

const Login: React.StatelessComponent<InjectedFormProps> = (props) => (
  <div>
    <Form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email' type='text' component='input' />
      </div>
      <div>
        <Field name='password' type='password' component='input' />
      </div>
    </Form>
    <LoginButton />
  </div>
)

export default reduxForm({
  form: 'loginForm',
  onSubmit: createUserRequest
})(Login)