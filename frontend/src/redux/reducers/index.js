import {
  combineReducers,
}
  from 'redux'

import modal from './modalReducer'
import hotDog from './hotDogReducer'

export default combineReducers({
  modal,
  hotDog,
})
