import axios from "axios";
import qs from "qs";
import AppConst from "../../library/appconst";
import { reqestInterceptor, reqestErrorInterceptor, responeInterceptor, responseErrorInterceptor } from "./interceptors";

const http = axios.create({
  baseURL: AppConst.remoteServiceBaseUrl,
  headers: {
    "Content-Type": "application/json"
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { encode: false });
  },
});

http.interceptors.request.use(reqestInterceptor, reqestErrorInterceptor);
http.interceptors.response.use(responeInterceptor, responseErrorInterceptor);


export default http;