import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDom.render(<AppRouter />, document.getElementById('app'));
