import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  /*  axios.get('https://api.kanye.rest')
    .then((response) => {
      setQuote(response.data.quote);
    });
   */
  const handleClick = () => {
     //event.preventDefault();
    console.log('yeet');
    axios.get('https://api.kanye.rest')
      .then((response) => {
        console.log(response.data.quote);
        setQuote(response.data.quote);
      });
  };

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      {quote}
      <button onClick={handleClick}>Test</button>
{/*       <form onSubmit={handleClick}>
        <input type="submit" />
      </form> */}
    </div>
  );
}

export default App;
