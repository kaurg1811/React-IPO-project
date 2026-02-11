import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Brokers from "./pages/Brokers";
import IPO from "./pages/IPO";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="brokers" element={<Brokers />} />
        <Route path="ipo" element={<IPO />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
