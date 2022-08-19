import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random',
});

const getAnswer = async () => {
  const { data } = await instance.get('');
  return data.value;
};

export default getAnswer;
