import axios from 'axios';

const API_URL = 'http://localhost:8080/api/attractions';

export default {
    getAllAttractions() {
        return axios.get(API_URL);
    },
    getAttractionById(id) {
        return axios.get(`${API_URL}/${id}`);
    },
    createAttraction(attraction) {
        return axios.post(API_URL, attraction);
    },
    updateAttraction(id, attraction) {
        return axios.put(`${API_URL}/${id}`, attraction);
    },
    deleteAttraction(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}
