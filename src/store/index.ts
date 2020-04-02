import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = composeWithDevTools(applyMiddleware(promise, thunk));

export default createStore(reducers, middlewares);
