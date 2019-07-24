import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  axios.get('https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts')
    .then((response) => {
      setQuote(response.data[0].content.replace(/<\/p>/, '').replace(/<p>/, ''));
      setAuthor(response.data[0].title);
    });


  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      {quote}
      {author}
    </div>
  );
}

export default App;
