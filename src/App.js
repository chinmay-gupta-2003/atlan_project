import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import store from "store/store";
import Router from "routes/routes";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
