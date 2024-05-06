import SignIn from "./components/sign-in-component/sign-in";
import Navbar from "./components/navbar-component/navbar";
import ProductContainer from "./components/product-container-component/product-container";
import OrderDetails from "./components/order-details-component/order-details";

const App = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <Navbar />
      <div className="container-fluid flex">
        <ProductContainer />
        <OrderDetails />
      </div>
    </div>
  );
}

export default App;
