import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

const getAll = () => {
  const request = axios.get(`${baseUrl}/todos`);
  return request.then((response) => response.data);
};

const create = (newObject: {}) => {
  const request = axios.post(`${baseUrl}/todos`, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const update = (id: string, newObject: {}) => {
  const request = axios.put(`${baseUrl}/todos/${id}`, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const remove = (id: string) => {
  const request = axios.delete(`${baseUrl}/todos/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, remove };
