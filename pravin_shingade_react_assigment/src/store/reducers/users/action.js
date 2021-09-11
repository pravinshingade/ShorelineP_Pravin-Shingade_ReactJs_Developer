import { USERS_CONSTANTS } from "./action.type";
import { URLS } from "../../../constants/urls";
import { apiRequest } from "../../../components/common/apiRequests";

const loadRequest = (payload) => ({
  type: USERS_CONSTANTS.USERS_LIST_LOAD_REQUEST,
  payload,
});
const loadFailure = (payload = "error") => ({
  type: USERS_CONSTANTS.USERS_LIST_LOAD_FAILURE,
  payload,
});
const loadSuccess = (payload) => {
    return {
    type: USERS_CONSTANTS.USERS_LIST_LOAD_SUCCESS,
    data: payload,
  };
};
export const getUsersLists = () => {
  let url = URLS.UserListURL;

  return (dispatch) => {
    dispatch(loadRequest());
    apiRequest("GET", url)
      .then((result) => {
        if (result.isError) {
          dispatch(loadFailure("Something went Worng"));
        } else {
          dispatch(loadSuccess(result.data.item || []));
        }
      })
      .catch((err) => {
        dispatch(loadFailure("Something went Worng"));
      });
  };
};

const updateSuccess = (payload) => {
  return {
    type: USERS_CONSTANTS.USERS_LIST_UPDATE_SUCCESS,
    data: payload
  }
}

export const updateUsersLists = (obj) => {
  return (dispatch) => {
    dispatch(updateSuccess(obj));
  };
};


