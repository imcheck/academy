import * as config from "@config/config";
import * as service from "./auth";
import Axios from "axios";

export async function post(path, data) {
  await service.authIdToken();
  const URL = config.SERVER_URI + path;
  const result = await Axios.post(URL, data, {
    headers: {
      Authorization: localStorage.getItem("id_token")
    }
  });
  if (result.status == 200) {
    if(result.data.status === 200) {
      return result.data.data;
    } else {
      return null;
    }
  }
  else {
    return null;
  }
}

export async function get(path) {
  await service.authIdToken();
  const URL = config.SERVER_URI + path;
  const result = await Axios.get(URL, {
    headers: {
      Authorization: localStorage.getItem("id_token")
    }
  });
  if (result.status == 200) {
    if(result.data.status === 200) {
      return result.data.data;
    } else {
      return null;
    }
  }
  else {
    return null;
  }
}

export async function put(path, data) {
  await service.authIdToken();
  const URL = config.SERVER_URI + path;
  const result = await Axios.put(URL, data, {
    headers: {
      Authorization: localStorage.getItem("id_token")
    }
  });
  if(result.status == 200) {
    if(result.data.status === 200) {
      return result.data.data;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
