import { GETLISTINGSUCCESS } from '../actions/listing'

const initialState = {
  listing: []
}
export default function reducer(state = initialState, action) {
  if (action.type === GETLISTINGSUCCESS) {
    return Object.assign({}, state, {
      listing: action.data
    })
  }
  return state
}
