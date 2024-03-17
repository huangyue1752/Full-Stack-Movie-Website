import axios from 'axios';

export default axios.create({
    baseURL:'https://e5b8-174-95-239-38.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});