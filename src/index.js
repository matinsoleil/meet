import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();