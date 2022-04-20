import axios from "axios";
import { uploadResumeUrl } from "./constants";

export const resumeUploadApi = async (body) => {
  const resp = await axios.post(uploadResumeUrl, body);
  return resp;
};
