import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import applicationStore from './applicationStore';
import App from './App';

ReactDOM.render(
    <Provider store={applicationStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);