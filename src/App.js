import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import './App.css';
import quoteService from './services/quote';


function App() {
  const [quote, setQuote] = useState('');

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
      <Row type="flex" justify="center" align="center">
        <Col span={6}>
          <h1 className="header">Kanye Quote Generator</h1>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="center">
        <Col span={6}>
          <div className="quote">
            <h2>{quote}</h2>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="center">
          <Button type="default" className="button-flex" onClick={handleClick}>New Quote</Button>
      </Row>

    </div>
  );
}

export default App;
