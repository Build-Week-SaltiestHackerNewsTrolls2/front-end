import axios from 'axios';

// https://cors-anywhere.herokuapp.com/

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: "https://troll-hub.herokuapp.com/api",
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
};

export default axiosWithAuth;