import { SubmissionError } from 'redux-form'

import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'

export const createListing = listing => dispatch => {
  return fetch(`${API_BASE_URL}/listing`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(listing)
  })
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    })
}

export const REMOVELISTINGSUCCESS = 'REMOVELISTINGSUCCESS'
const removeListingSuccess = () => {
  return {
    type: REMOVELISTINGSUCCESS
  }
}
export const GETLISTINGSUCCESS = 'GETLISTINGSUCCESS'
const getListingSuccess = data => {
  return {
    type: GETLISTINGSUCCESS,
    data
  }
}
export const UPDATELISTINGSUCCESS = 'UPDATELISTINGSUCCESS'
const updateListingSuccess = data => {
  return {
    type: UPDATELISTINGSUCCESS,
    data
  }
}

export const getListing = () => dispatch => {
  return fetch(`${API_BASE_URL}/listing`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(data => {
      dispatch(getListingSuccess(data))
    })
    .catch(err => {
      const { reason, message, location } = err
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    })
}

export const removeListingAction = id => dispatch => {
  return fetch(`${API_BASE_URL}/listing/${id}`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(removeListingSuccess())
    })
    .catch(err => {
      const { reason, message, location } = err
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    })
}

export const updateListing = newListing => dispatch => {
  return fetch(`${API_BASE_URL}/listing`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newListing)
  })
    .then(res => res.json())
    .then(data => {
      return dispatch(updateListingSuccess)
    })
    .catch(err => {
      const { reason, message, location } = err
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        )
      }
    })
}
