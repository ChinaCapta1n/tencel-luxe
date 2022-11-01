import axios from 'axios';

const SERVER_BASE_URL = API_BASE;

axios.defaults.baseURL = SERVER_BASE_URL;
axios.defaults.timeout = 10000;
axios.defaults.headers = {
    "Content-Tpye": "application/json;charset=UTF-8"
}

axios.interceptors.response.use( response => {
    // if(response.data.pageData && response.data.pageData.filter(item => item.type == 'seoData').length > 0) {
    //     let seoData = response
    // }
    return response;
}, error => {
    return Promise.reject(error);
})

export function get(url, params={}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export function post(url, data={}, config={}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}