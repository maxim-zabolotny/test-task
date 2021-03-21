import Type from '../types'
import {createNewProduct, deleteProduct, update, updateProduct} from "../actions";

const initialState = {
  data: null,
  isEdit: null,
  isUpdate: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_DATA:
      return {
        ...state,
        data: action.payload,
        isUpdate: false,
      }
    case Type.EDIT_ID:
      return {
        ...state,
        isEdit: action.id,
        isUpdate: action.bool,
      }

      case Type.SEND_UPDATE:
        updateProduct(action.id, action.updateProduct)
      return {
        ...state,
        isEdit: null,
        isUpdate: action.isUpdate,
      }

    case Type.DELETE:
      deleteProduct(action.id);
      return {
        ...state,
        isEdit: null,
        isUpdate: true,
      }
    case Type.EDIT:
      return {
        ...state,
        data: state.data.map((obj) => {
          if (obj.id === action.id) {
            return action.newObj
          }
          return obj
        }),
      }
    case Type.CREATE:
      createNewProduct(action.newObj);
      return {
        ...state,
        isUpdate: true,
      }
    case Type.STOP_UPDATE_DATA:
      return {
        ...state,
        isUpdate: false,
      }

    default:
      return state
  }
}
export default reducer
