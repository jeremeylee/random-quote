import axios from 'axios';

const getQuote = async () => {
  const response = await axios.get('https://api.kanye.rest');
  return response.data;
};

export default { getQuote };
