import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cakes from "./pages/cakes";
import CartComp from "./components/cartComp";
import Icecream from "./pages/icecreams";

import CartsPage from "./pages/cartspage";
import Chocolates from "./pages/chocolates";
import Flowers from "./pages/flowers";
import SignIn from "./pages/sign in";
import Signup from "./pages/signup";
import Paymentpage from "./pages/payment";
import Users from "./pages/users";
import Products from "./pages/products";

function App() {
  let p1 = ["cakes", "icecreams", "chocolates", "flowers", "users", "products"];
  let s1 = ["Profile", "settings", "password", "logout"];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar pages={p1} settings={s1} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/icecreams" element={<Icecream />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/cart" element={<CartsPage />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route exact path="/Home" element={<Cakes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Icecream />} />
          <Route path="/paymentpage" element={<Paymentpage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
