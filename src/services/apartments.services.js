import axios from '../utils/axios';

const getApartmentsList = () => {
  return axios.get('/apartments');
};

const getApartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};
export default {getApartmentsList,getApartmentById}