import {
  RESUME_UPLOAD_STARTED,
  RESUME_UPLOAD_SUCCESS,
  RESUME_UPLOAD_FAILED,
} from "../actions/types";

const initialState = {
  isLoading: false,
  error: { isError: false, message: "" },
  data: {},
};

function stateReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESUME_UPLOAD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: { isError: false, message: "" },
      };

    case RESUME_UPLOAD_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case RESUME_UPLOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: { isError: true, message: payload },
      };

    default:
      return state;
  }
}

export default stateReducer;
