import axios from 'axios';

export const getInfomation = async () => {
  try {
    return await axios.get('http://localhost:3001/');
  } catch (error) {
    return false;
  }
};
