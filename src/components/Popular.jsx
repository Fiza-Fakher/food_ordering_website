import React from "react";
import "./Popular.css";
import burger1 from "../images/burger1.png";
import burger2 from "../images/burger2.png";
import burger3 from "../images/burger3.png";

function Popular({ cartItems, setCartItems }) {
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const popularItems = [
    { id: 1, name: "BBQ Burger", price: 25.50, image: burger1, description: "Satisfy your cravings with the rich, smoky flavor of our BBQ burger." },
    { id: 2, name: "Lamb Burger", price: 25.50, image: burger2, description: "Enjoy the unique, flavorful taste of our grilled lamb burger, made to impress." },
    { id: 3, name: "Chicken Burger", price: 25.50, image: burger3, description: "Enjoy the delicious, crispy crunch of our perfectly grilled chicken burger." }
  ];

  return (
    <>
      <div className="popular-menu">
        <div className="content">
          <h4>Our Menu</h4>
          <h2>Our Popular Menu</h2>
          <p>
            Taste our best-loved dishes, <br />
            crafted to delight every bite.
          </p>
        </div>
        <div className="cards">
          {popularItems.map((item) => (
            <div className={`card card${item.id}`} key={item.id}>
              <div className={`card_img card${item.id}_img`}>
                <img className={`c${item.id}`} src={item.image} alt={item.name} />
              </div>
              <div className="card_content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <h1>${item.price.toFixed(2)}</h1>
                <div className={`c${item.id}_btn`}>
                  <button className="cart-btn" onClick={() => addToCart(item)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-btn">
          <a href="">More Menu</a>
        </div>
      </div>
    </>
  );
}

export default Popular;
