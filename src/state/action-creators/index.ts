import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

// Use thunk for async action creation
export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    })

    try {
      const { data } = await axios.get('https://api.npms.io/v2/search?', {
        params: {
          q: term,
        },
      })

      const packageNames = data.results.map((result: any) => {
        return result.package.name
      })

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: packageNames,
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      })
    }
  }
}
