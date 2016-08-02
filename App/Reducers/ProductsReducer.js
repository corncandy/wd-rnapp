import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  list: [],
  current: {}
})

// request temp
const request = (state, action) =>
  state.merge({
    fetching: true,
    category: action.category,
    list: []
  })

// receive temp
const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    list: action.list
  })

// temp failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    list: []
  })

// request temp
const requestOne = (state, action) =>
  state.merge({
    fetching: true,
    id: action.id,
    current: {}
  })

// receive temp
const receiveOne = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    current: action.item
  })

// temp failure
const failureOne = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    current: {}
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_RECEIVE]: receive,
  [Types.PRODUCTS_FAILURE]: failure,
  [Types.PRODUCT_REQUEST]: requestOne,
  [Types.PRODUCT_RECEIVE]: receiveOne,
  [Types.PRODUCT_FAILURE]: failureOne
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
