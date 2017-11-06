import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import App from './components/App'
import './styles/screen.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill Bozo', amount: 2500 }))
store.dispatch(addExpense({ description: 'Gas Bill Bozo' }))
store.dispatch(setTextFilter('Water'))

setTimeout(() => {
  store.dispatch(setTextFilter('Bill'))
}, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const root = document.getElementById('root')

const render = app => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>{app}</AppContainer>,
    root
  )
}

// render(<App />)

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(jsx)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(<NextApp />)
  })
}
