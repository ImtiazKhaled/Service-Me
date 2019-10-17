import React from 'react'
import MainNavigation from './components/mainNavigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { RootReducer } from './redux/rootReducer'


const store = createStore(RootReducer)



export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

