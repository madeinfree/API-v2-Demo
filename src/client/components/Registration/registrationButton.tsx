import * as React from 'react';
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const RegistrationButton = ({ dispatch }: { dispatch: any }) => (
  <button onClick={() => dispatch(submit('registrationForm'))}>
    Sign on
  </button>
)

export default connect()(RegistrationButton)

