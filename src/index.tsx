import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Helmet } from 'react-helmet';
import "antd/dist/antd.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Cinzel&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);