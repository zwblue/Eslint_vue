import axios from 'axios';
import qs from 'qs';
import baseURL from './baseurl'
import { Notice } from 'iview';
// 请求时拦截
axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应时拦截
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

// 检测状态是否正确
function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

// 检测code是否正确
function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        Notice.error({ title: res.msg })
    }
    if (res.data.code !== 0) {
        Notice.error({ title: '接口返回错误信息', desc: res.data.msg })
    }
    return res
}

function get(url, params) {
    return axios({
        method: 'get',
        baseURL: baseURL,
        url,
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }
    ).then(

        (res) => {
            return checkCode(res)
        }
    )
}
function post(url, data) {
    return axios({
        method: 'post',
        baseURL: baseURL,
        url,
        data: data,
        timeout: 10000,
        // headers: {
        //     'X-Requested-With': 'XMLHttpRequest',
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        // }
        headers: {
            'Content-Type': 'application/json;charset=utf-8'//确定你入参的类型是否与后台的类型一致
        }
    }).then(
        (response) => {
            console.log('response', response)
            return checkStatus(response)
        }
    ).then(
        (res) => {
            console.log('data', res)
            return checkCode(res)
        }
    )
}
export { get };
export default post;
