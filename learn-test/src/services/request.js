import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
const MOCK_SERVER = process.env.VUE_APP_MOCK_SERVER || ""//mock基础路径


export function request(config) {
  // 1创建实例

  const instance = axios.create({
    baseURL: BASE_URL,
    // baseURL: "api/",
    timeout: TIMEOUT
  });

  instance.interceptors.request.use(
    config => {
      // store.commit("setIsLoading", true);
      return config;
    },
    err => {}
  );
  instance.interceptors.response.use(
    res => {
      // data预处理
      // store.commit("setIsLoading", false);
      return res.data;
    },
    err => {
      // message.error(err, [1]);
      // console.log(err);
    }
  );
  return instance(config);
}

