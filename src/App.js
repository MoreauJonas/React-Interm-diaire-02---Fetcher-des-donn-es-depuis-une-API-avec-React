import React from 'react';
import { useState } from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';

const simpsonsList= {
  quote:
    "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  characterDirection: 'Right',
};


function App() {
  const [quoteList, setQuoteList] = useState(simpsonsList);
  const getSimpsons = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
     
      setQuoteList(data[0]);
      });
  };
    
  return (
    <div>
      <QuoteCard quote={quoteList} />
      <button type="button" onClick={getSimpsons}>Get simpson</button> 

    </div>
  );
}

export default App;
