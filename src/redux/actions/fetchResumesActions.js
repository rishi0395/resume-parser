import {
  FETCH_RESUMES_STARTED,
  FETCH_RESUMES_FAILED,
  FETCH_RESUMES_SUCCESS,
} from "./types";

import createRequestAction from "../createRequestAction";
import { fetchResumesApi } from "../../Api/fetchResumesApi";

export const fetchResumesStarted = () => ({
  type: FETCH_RESUMES_STARTED,
});

export const fetchResumesSuccess = (data) => ({
  type: FETCH_RESUMES_SUCCESS,
  payload: data,
});

export const fetchResumesFailed = (error) => ({
  type: FETCH_RESUMES_FAILED,
  payload: error,
});

export function handleFetchResumes() {
  return createRequestAction({
    onStart: (dispatch) => dispatch(fetchResumesStarted()),
    request: () => fetchResumesApi(),
    onSuccess: (dispatch, resp) => {
      if (Object.keys(resp).length) {
        dispatch(fetchResumesSuccess(resp));
      } else {
        dispatch(fetchResumesFailed("error"));
      }
    },
    onFailure: (dispatch, error) => {
      dispatch(fetchResumesFailed(error));
    },
  });
}
