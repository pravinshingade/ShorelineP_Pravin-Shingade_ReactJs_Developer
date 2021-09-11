import { USERS_CONSTANTS } from './action.type'

const initialState = {
  isFirst: false,
  isLoaded: false,
  isError: false,
  errorMessage: '',
  list: [],
}

const presentationList = (state = initialState, action = {}) => {
  switch (action.type) {
    case USERS_CONSTANTS.USERS_LIST_LOAD_REQUEST:
      return {
        ...state,
        isLoaded: false,
        isError: false,
        errorMessage: '',
        list: [],
      }

    case USERS_CONSTANTS.USERS_LIST_LOAD_SUCCESS:
      return {
        ...state,
        isFirst: true,
        isLoaded: true,
        isError: false,
        errorMessage: '',
        list: [...action.data],
      }

    case USERS_CONSTANTS.USERS_LIST_LOAD_FAILURE:
      return {
        ...state,
        isLoaded: true,
        isError: true,
        errorMessage: action.payload
      }
    case USERS_CONSTANTS.USERS_LIST_UPDATE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isError: false,
        list: [...state.list, action.data]
      }
    default:
      return state
  }
}
export default presentationList
