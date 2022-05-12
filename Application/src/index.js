import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Card from './Components/Card.js'
import data from './data.js'

const cards = data.map(x => {
  return <Card
    key={x.id}
    {...x} />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {cards}
  </React.StrictMode>
);

