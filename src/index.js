import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './components/FilterableProductTable';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
