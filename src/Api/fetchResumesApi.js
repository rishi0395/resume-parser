import axios from "axios";
import { fetchResumesUrl } from "./constants";
import { data } from "../constants";

export const fetchResumesApi = async () => {
  // const resp = await axios.get(fetchResumesUrl);
  const resp = data;

  return resp;
};
