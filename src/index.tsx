import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BACKEND: string;
      // adicione aqui outras variáveis de ambiente que você precise
    }
  }
}
const apiUrl = process.env.REACT_APP_BACKEND;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)