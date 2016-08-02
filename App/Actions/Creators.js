import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestProducts = (category) => ({ type: Types.PRODUCTS_REQUEST, category })
const receiveProducts = (list) => ({ type: Types.PRODUCTS_RECEIVE, list })
const receiveProductsFailure = () => ({ type: Types.PRODUCTS_FAILURE })

const requestCategories = (shop) => ({ type: Types.CATEGORIES_REQUEST, shop })
const receiveCategories = (list) => ({ type: Types.CATEGORIES_RECEIVE, list })
const receiveCategoriesFailure = () => ({ type: Types.CATEGORIES_FAILURE })

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,

  requestProducts,
  receiveProducts,
  receiveProductsFailure,

  requestCategories,
  receiveCategories,
  receiveCategoriesFailure,
}
