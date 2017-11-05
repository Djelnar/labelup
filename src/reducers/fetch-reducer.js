import {
  FETCH_ACCOUNTS,
  FETCH_MORE,
  SET_ACCOUNT
} from '../actions-types'


const fetchAccountsInitialState = {
  accounts: [],
  pagination: {
    nextPage: 1,
    onNextPage: 0,
    totalCount: 0
  },
  list: ''
}

const accounts = (state, payload) => {
  if (payload.pagination.list !== state.pagination.list) {
    return payload
  } else {
    return {
      accounts: [
        ...state.accounts,
        ...payload.accounts
      ],
      pagination: payload.pagination
    }
  }
}

export default (state = fetchAccountsInitialState, { type, payload }) => {
  switch (type) {
    case FETCH_ACCOUNTS:
      return accounts(state, payload)
    case SET_ACCOUNT:
      return fetchAccountsInitialState
    default:
      return state
  }
}