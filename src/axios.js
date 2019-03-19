import axios from 'axios';

const instant =  axios.create({
    baseURL: ""
});

export default instant;