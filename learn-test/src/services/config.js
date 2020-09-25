// const devBaseURL = "http://192.168.46.232:8686";
const devBaseURL =
  " https://www.easy-mock.com/mock/5f6aab1408d0e90f8b2abf78/test";

const proBaseURL =
  "https://www.easy-mock.com/mock/5f6aab1408d0e90f8b2abf78/test";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
