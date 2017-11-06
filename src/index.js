import React from 'react'
import { render } from 'react-dom'
import store from './store'
import App from './app'
import { Provider } from 'react-redux'

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))



render(<Provider store={store} >
         <App />
       </Provider>, document.querySelector('#root'))