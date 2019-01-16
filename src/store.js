import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { loadAuthToken } from './local-storage'
import authReducer from './reducers/auth'
import listingReducer from './reducers/listing'

import { setAuthToken, refreshAuthToken } from './actions/auth'

const store = createStore(
  combineReducers({
    listing: listingReducer,
    form: formReducer,
    auth: authReducer,

  }),
  applyMiddleware(thunk)
)

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken()
if (authToken) {
  const token = authToken
  store.dispatch(setAuthToken(token))
  store.dispatch(refreshAuthToken())
}

export default store
