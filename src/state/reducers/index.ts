// Combine reducers
import { combineReducers } from 'redux'
import repositoryReducer from './repositoryReducer'

const reducers = combineReducers({
  repositories: repositoryReducer,
})

export default reducers

// Resolving in RepositoriesList: Property 'repositories' does not exist on type 'DefaultRootState'
export type RootState = ReturnType<typeof reducers>
