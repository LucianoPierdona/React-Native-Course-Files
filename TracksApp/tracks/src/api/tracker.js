import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'http://4a33b7c82a45.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('item');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;

