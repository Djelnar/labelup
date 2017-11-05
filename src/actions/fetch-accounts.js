import { FETCH_ACCOUNTS } from '../actions-types'
import { getUsers } from '../api'


export default (list, page) => async (dispatch) => {
  const data = await getUsers({ list, page })
  const { accountsList } = await data
  dispatch({
    type: FETCH_ACCOUNTS,
    payload: {
      ...accountsList
    }
  })
}