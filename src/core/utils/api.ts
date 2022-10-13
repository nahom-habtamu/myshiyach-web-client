import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://167.172.148.80:5010/api'
});

export default instance;