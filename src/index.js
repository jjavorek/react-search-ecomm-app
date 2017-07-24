import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const inventory = [
  {name: 'Football', price: 49.99, inStock: true},
  {name: 'Baseball', price: 9.99, inStock: true},
  {name: 'Basketball', price: 29.99, inStock: false},
  {name: 'iPod Touch', price: 99.99, inStock: true},
  {name: 'iPhone 5', price: 399.99, inStock: true},
  {name: 'Nexus 7', price: 199.99, inStock: false}
]

ReactDOM.render(<App inventory={inventory} />, document.getElementById('root'));
registerServiceWorker();
