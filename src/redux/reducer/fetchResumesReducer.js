import {
  FETCH_RESUMES_STARTED,
  FETCH_RESUMES_SUCCESS,
  FETCH_RESUMES_FAILED,
} from "../actions/types";

const initialState = {
  isLoading: false,
  error: { isError: false, message: "" },
  data: [],
};

function fetchResumesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RESUMES_STARTED:
      return {
        ...state,
        isLoading: true,
        error: { isError: false, message: "" },
      };

    case FETCH_RESUMES_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case FETCH_RESUMES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: { isError: true, message: payload },
      };

    default:
      return state;
  }
}

export default fetchResumesReducer;
