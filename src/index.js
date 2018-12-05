import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StorageManager from './lib/managers/storage';
import JobManager from './lib/managers/job';

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

export const db = new StorageManager();
export const job = new JobManager();

job.checkMuttedConversationsExp();
ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();