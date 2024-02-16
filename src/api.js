import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/l9hLNDrl4L6i1e9cEUuibsc4AGOz59ka',
});

const api = {
    async loadRestaurants() {
            const response = await client.get('/restaurants');
            return response.data;
  },
};
  export default api;