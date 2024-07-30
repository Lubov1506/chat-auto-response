import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "modern-normalize";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "../../client/node_modules/react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
