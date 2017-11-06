import { getUsers } from './api'
import { kea } from 'kea'
import PropTypes from 'prop-types'


const accountsReducer = (state, payload) => {
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

const fetchAccountsInitial = {
  accounts: [],
  pagination: {
    nextPage: 1,
    onNextPage: 0,
    totalCount: 0
  },
  list: ''
}

export const appLogic = kea({
  actions: () => ({
    SET_ACCOUNT: payload => payload,
    UPDATE_ACCOUNTS: p => p
  }),
  thunks: ({ actions, get, fetch, dispatch, getState }) => ({
    FETCH_ACCOUNTS: async (list, page = 0) => {
      const data = await getUsers({ list, page })
      const { accountsList } = await data
      actions.UPDATE_ACCOUNTS({
        ...accountsList
      })
    }
  }),
  reducers: ({ actions, constants }) => ({
    fetchAccounts: [
      {
        ...fetchAccountsInitial
      },
      PropTypes.object, {
        [actions.UPDATE_ACCOUNTS]: accountsReducer,
        [actions.SET_ACCOUNT]: (state, payload) => ({
          ...fetchAccountsInitial
        })
      }
    ],
    accounts: [
      {
        account: 'instagram'
      },
      PropTypes.object, {
        [actions.SET_ACCOUNT]: (state, payload) => ({
          account: payload
        })
      }
    ]
  }),
  selectors: ({ selectors }) => ({
    accountList: [
      () => [selectors.fetchAccounts],
      _ => _.accounts,
      PropTypes.array
    ],
    nextPage: [
      () => [selectors.fetchAccounts],
      _ => _.pagination.nextPage,
      PropTypes.number
    ],
    onNextPage: [
      () => [selectors.fetchAccounts],
      _ => _.pagination.onNextPage,
      PropTypes.number
    ],
    totalCount: [
      () => [selectors.fetchAccounts],
      _ => _.pagination.totalCount,
      PropTypes.number
    ],
    currentAccount: [
      () => [selectors.accounts],
      _ => _.account,
      PropTypes.string
    ]
  })
})