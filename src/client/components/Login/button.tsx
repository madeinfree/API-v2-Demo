import { } from './login';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux'
import { submit } from 'redux-form'

const LoginButton = ({ dispatch }: { dispatch: any }) => (
  <button
    type='button'
    onClick={() => dispatch(submit('loginForm'))}>
    Submit
  </button>
)

export default connect()(LoginButton)