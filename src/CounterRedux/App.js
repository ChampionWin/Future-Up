import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import Counter from "./components/Counter";
import counterReducer from "./reducers/counterReducer";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
