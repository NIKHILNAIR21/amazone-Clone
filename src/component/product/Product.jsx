import React from "react";
import { useStateValue } from "../../context/StateProvider";
import "./product.css";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  console.log(title);
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
