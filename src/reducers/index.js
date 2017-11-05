import { combineReducers } from 'redux'
import accounts from './accounts-reducer'
import fetchAccounts from './fetch-reducer'


export default combineReducers({
  accounts,
  fetchAccounts
})