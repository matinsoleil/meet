import axios from 'axios'
export const apiGet = (url) => () => axios.get(url)
    .then(res => {
        return (res.data);
    })
export const apiPost = (url, obj) => () => axios.post(url, obj)
    .then(res => {
        return (res.data);
    })    