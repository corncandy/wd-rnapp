import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import { watchStartup } from './StartupSaga'
import { watchLoginAttempt } from './LoginSaga'
import getCityWeather from './GetCityWeatherSaga'
import getProducts from './GetProductsSaga'
import getProduct from './GetProductSaga'
import getCategories from './GetCategoriesSaga'
import DebugSettings from '../Config/DebugSettings'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(watchLoginAttempt)
  yield fork(getCityWeather(api).watcher)
  yield fork(getProducts(api).watcher)
  yield fork(getProduct(api).watcher)
  yield fork(getCategories(api).watcher)
}
