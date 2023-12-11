import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./styles/global"
import { BaseLayout } from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
