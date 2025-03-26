import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Router from "./routes/routes";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
