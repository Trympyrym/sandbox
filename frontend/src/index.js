import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from "react-intl";
import translations from "./translations/translations";

const locale = 'ru-RU';

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider locale={locale} messages={translations[locale]}>
          <App />
      </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
