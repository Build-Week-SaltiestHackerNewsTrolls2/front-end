import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://troll-hub.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;