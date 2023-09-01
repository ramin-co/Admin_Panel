import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.scss";
import { styled } from "styled-components";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Container = styled.div``;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Container>
  </React.StrictMode>
);
