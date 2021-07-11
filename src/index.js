import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';

// import App from './App';

// import {createStore} from 'redux';
// import rootReducer from './Redux/Reducer/GlobalReducer';
// import {Provider} from 'react-redux'


// const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
  
    {/* <App /> */}
    {/* <Provider store={store}> */}
    <Home />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
