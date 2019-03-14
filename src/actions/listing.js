import { SubmissionError } from 'redux-form'

import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'

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
export const createListing = listing => dispatch => {
  return fetch(`${API_BASE_URL}/listing`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `bearer ${localStorage.authToken}`
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

export const getListing = search => dispatch => {
  return fetch(`${API_BASE_URL}/listing?searchTerm=${search ? search : ''}`, {
    method: 'GET',
    headers: {
      authorization: `bearer ${localStorage.authToken}`
    }
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
export const getALLListings = () => dispatch => {
  return fetch(`${API_BASE_URL}/listing/all`, {
    method: 'GET',
    headers: {
      authorization: `bearer ${localStorage.authToken}`
    }
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
    method: 'DELETE',
    headers: {
      authorization: `bearer ${localStorage.authToken}`
    }
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
