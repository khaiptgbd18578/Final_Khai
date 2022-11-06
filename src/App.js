import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./pages/HomeScreen";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CartScreen from "./pages/CartScreen";
import OrderScreen from "./pages/OrderScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import ProfileScreen from "./pages/ProfileScreen";
import Register from "./pages/Register";
import ShippingScreen from "./pages/ShippingScreen";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/login" component={Login} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/order" component={OrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/profile" component={ProfileScreen}  />
        <Route path="/register" component={Register} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
