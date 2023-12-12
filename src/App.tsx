import { BrowserRouter, Route, Routes } from "react-router-dom";
import { globalStyles } from "./styles/global"
import { BaseLayout } from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CookiesProvider } from "react-cookie";

export default function App() {
  globalStyles();

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}
