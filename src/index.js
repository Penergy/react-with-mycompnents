import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CommentsContainer from './components/CommentsContainer';

ReactDOM.render(<FlavorForm />, document.getElementById('root'));
registerServiceWorker();
