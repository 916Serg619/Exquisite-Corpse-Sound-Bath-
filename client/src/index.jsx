import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
};
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);