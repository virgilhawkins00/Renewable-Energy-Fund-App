import React from 'react'
import { render } from 'react-dom'
import { provider } from 'react-redux'
import { createStoreHook } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStoreHook(rootReducer)

render( 
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)