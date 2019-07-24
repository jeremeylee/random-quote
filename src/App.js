import React, { useState, useEffect } from 'react';
import axios from 'axios';
import quoteService from './services/quote';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  /*  axios.get('https://api.kanye.rest')
    .then((response) => {
      setQuote(response.data.quote);
    });
   */
  const randomQuote = async () => {
    const response = await quoteService.getQuote();
    setQuote(response.quote);
  };

  useEffect(() => {
    randomQuote();
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    randomQuote();
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      {quote}
      <form onSubmit={handleClick}>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
