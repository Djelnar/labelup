import { SET_ACCOUNT } from '../actions-types'


const reducerInitialState = {
  account: 'instagram'
}
export default (state = reducerInitialState, {type, payload}) => {
  switch (type) {
    case SET_ACCOUNT:
      return {
        account: payload
      }
    default:
      return state
  }
}