import axios from "axios";
import { apiSGDirectusURLCustom } from "../constants/constant";

export async function apiSGDirectusCustom(url, options) {
  return getDataFromAPI(apiSGDirectusURLCustom + url, options);
}

export async function getDataFromAPI(url, options) {
  let response;
  try {
    if (!options) {
      response = await axios({ url: url });
    } else {
      let axiosOptions = options;
      axiosOptions.url = url;
      response = await axios(axiosOptions);
    }

    const data = await response.data;
    return data;
  } catch (error) {
    let err;

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data.errors[0].message);
      console.log(error.response.data.errors[0].message);
      console.log(error.response.status);

      err = {
        message: error.response.data.errors.message,
        status: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      err = { requestError: error.request };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(error.message);
      err = { message: error.message };
    }

    // console.log(error.response.data.error);
    return { error: err };
  }
}
