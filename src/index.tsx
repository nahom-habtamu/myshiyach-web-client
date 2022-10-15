import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from './presentation/pages/App';
import configureStore from "./store/configureStore";
import '../src/presentation/general_style/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);