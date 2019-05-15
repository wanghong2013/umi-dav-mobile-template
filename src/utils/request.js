import axios from "axios";
import { Toast } from "antd-mobile";
import router from 'umi/router';

axios.interceptors.request.use(
    config => {
        //统一管理token
        // let jdxctoken = localStorage.getItem("jdxctoken");
        // if (jdxctoken && jdxctoken.length > 0) {
        //     config.headers.AccessToken = jdxctoken;
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default function Request(url, params) {
    return axios({
        //baseURL: "http://m.9dxinyong.com/",
        // baseURL: "http://test.9dxinyong.com/",
        baseURL: "http://9d.com/",
        url: url,
        method: "GET",
        contentType: "application/json;charset=utf-8",
        ...params
    })
        .then(res => {
            return res;
        })
        .catch(error => {
            if (!error.response) {
                return { data: { success: false, msg: '网络通信错误' } }
            }
            const status = error.response.status;
            // const { dispatch } = store;
            if (status === 401) {
                Toast.fail("证书过期，请重新登录", 1);
                router.replace('/login');
                //清空localstorge 未处理

            } else if (status === 403) {
                //dispatch(routerRedux.push('/exception/403'));
            } else if (status <= 504 && status >= 500) {
                //dispatch(routerRedux.push('/exception/500'));
            } else if (status >= 404 && status < 422) {
                // dispatch(routerRedux.push('/exception/404'));
            }
            return Promise.reject(error.response.data);
        });
}
