import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheets/page4.css';
import Page4 from './components/page4';
import './stylesheets/page5.css';
import Page5 from './components/page5';
import './stylesheets/page6.css'
import Page6 from './components/page6';
import './stylesheets/start.css';
import Start from './components/start';
import './stylesheets/press.css'
import Press from './components/press';
import './stylesheets/workcss.css';
import Work from './components/work';
import "./stylesheets/footer.css";
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page4 />
    <Page5 />
    <Page6 />
    <Start />
    <Press />
    <Work />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
