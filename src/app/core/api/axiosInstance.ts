/* eslint-disable dot-notation */

import axios from 'axios';

const AxiosInstance = () => {
  // Set config defaults when creating the instance
  const instance = axios.create({
    withCredentials: true,
    validateStatus: status => {
      return status < 500; // Reject only if the status code is greater than or equal to 500
    },
  });

  // Alter defaults after instance has been created
  // instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return instance;
};

export default AxiosInstance;
