import React from "react";
import "./Checkout.css";
import Subtotal from "../../component/subTotal/SubTotal";
import { useStateValue } from "../../context/StateProvider";
import CheckoutProduct from "../../component/CheckoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../context/Reducer";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket?.map((items, i) => (
            <CheckoutProduct
              key={items?.id}
              id={items?.id}
              title={items?.title}
              image={items?.image}
              price={items?.price}
              rating={items?.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
