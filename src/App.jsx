import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/home/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/home/productList/ProductList";
import Product from "./pages/home/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
