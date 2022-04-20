import {
  RESUME_UPLOAD_STARTED,
  RESUME_UPLOAD_FAILED,
  RESUME_UPLOAD_SUCCESS,
} from "./types";

import createRequestAction from "../createRequestAction";
import { resumeUploadApi } from "../../Api/resumeUploadApi";

export const resumeUploadStarted = () => ({
  type: RESUME_UPLOAD_STARTED,
});

export const resumeUploadSuccess = (data) => ({
  type: RESUME_UPLOAD_SUCCESS,
  payload: data,
});

export const resumeUploadFailed = (error) => ({
  type: RESUME_UPLOAD_FAILED,
  payload: error,
});

export function handleResumeUpload(body) {
  return createRequestAction({
    onStart: (dispatch) => dispatch(resumeUploadStarted()),
    request: () => resumeUploadApi(body),
    onSuccess: (dispatch, resp) => {
      if (Object.keys(resp).length) {
        dispatch(resumeUploadSuccess(resp));
      } else {
        dispatch(resumeUploadFailed("error"));
      }
    },
    onFailure: (dispatch, error) => {
      dispatch(resumeUploadFailed(error));
    },
  });
}
