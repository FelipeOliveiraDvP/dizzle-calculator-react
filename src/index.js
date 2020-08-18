import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Drizzle
import { Drizzle, generateStore } from '@drizzle/store';
import Addition from './contracts/Addition.json';

// Select the contract we want
const options = { contracts: [Addition] };

// Setup drizzle store
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

// Pass the drizzle instance to App component
ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
