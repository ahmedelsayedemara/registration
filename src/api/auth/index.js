import { METHODS } from "../helpers/index";

const API_URLS = {
  nationalities: "resources?resources=nationalities",
  register:"register",
  activateEmailAccount:"activate-email-account"
};

export const getLoadNationalitiesRequest = () => ({
  method: METHODS.get,
  url: API_URLS.nationalities,
});

export const getRegisterRequest = data => {
  return {
    method: METHODS.post,
    url: API_URLS.register,
    config: {
      data
    }
  };
};

export const getActivateEmailAccountRequest = data => {
  return {
    method: METHODS.post,
    url: API_URLS.activateEmailAccount,
    config: {
      data
    }
  };
};
