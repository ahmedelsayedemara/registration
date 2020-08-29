import axios from "axios";
import qs from "qs";

export const executeRequest = ({ method, url, config = {} }) =>
  axios({
    method,
    url: `https://beta.development-majles.tech/${url}`,
    data: {
      ...config.data,
    },
    params: {
      ...config.params,
    },
    paramsSerializer(params) {
      return qs.stringify(params, { arrayFormat: "comma" });
    },
  });
