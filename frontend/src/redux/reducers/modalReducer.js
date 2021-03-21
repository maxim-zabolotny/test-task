import Type from '../types'

const initialState = {
  isOpen: false,
  component: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case Type.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}
export default reducer
