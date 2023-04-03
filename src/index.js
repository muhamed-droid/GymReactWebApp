import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Browser router keeps our UI in sync with URL.
//It is the parent component used to store all other components.
//React.StrictMode enables strict mode for the entire app, which help catch potential issues
//and enforces best practices.

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);