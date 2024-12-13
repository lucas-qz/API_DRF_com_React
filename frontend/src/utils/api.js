import axios from 'axios';

const api = axios.create({
    baseURL: 'http://lucasqz.com.br:8000/api', // Backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api; 
