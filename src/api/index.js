import axios from 'axios'
export const apiGet = (url) => () => axios.get(url)
    .then(res => {
        return (res.data);
    })