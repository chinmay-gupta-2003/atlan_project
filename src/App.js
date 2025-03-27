import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

import store from "store/store";
import Router from "routes/routes";
import { theme } from "constants/muiTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="container">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <ToastContainer position="top-center" />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
