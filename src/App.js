import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { userForm, productForm } from "./data/formData";
import { useSelector } from "react-redux";

import Home from "./Pages/Home";
import Users from "./Pages/Users";
import User from "./Pages/User";
import New from "./Pages/New";
import Order from "./Pages/Order";
import "./app.scss";
import Products from "./Pages/Products";
import Login from "./Pages/Login";

function App() {
  const user = useSelector((state) => state.user.currentUser);
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route
            path="/"
            element={user ? <Navigate to="/dashbord" /> : <Login />}
          />

          {user && (
            <>
              <Route path="/dashbord" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<User />} />
              <Route
                path="/users/new"
                element={<New title="Add New user" formData={userForm} />}
              />
              <Route path="/products" element={<Products />} />
              <Route
                path="/Products/new"
                element={<New title="Add New Product" formData={productForm} />}
              />
              <Route path="/orders" element={<Order />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
