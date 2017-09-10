import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'

import Registration from './components/Registration/registration'
import Login from './components/Login/login'
import CreateBrandButton from './components/Brand/brand'

interface Props { }

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Registration />
          <Login />
          <CreateBrandButton />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('view'))