import React from "react";
import "./Order.css";
import { FaTrashAlt } from "react-icons/fa";

function Order({ cartItems, setCartItems }) {
  const deliveryCharge = 250.0;

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const totalBill = totalItemCost + deliveryCharge;

  return (
    <div className="order-con">
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <div className="elements">
              {cartItems.map((item) => (
                <div className="e1" key={item.id}>
                  <img src={item.image} alt={item.name} className="e1-img1" />
                  <div className="e1-c">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <h4>${item.price.toFixed(2)}</h4>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="delete-btn"
                    >
                      <FaTrashAlt /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-summary">
              <h4>Total Item Cost: ${totalItemCost.toFixed(2)}</h4>
              <h4>Delivery Charge: ${deliveryCharge.toFixed(2)}</h4>
              <h3>Total Bill: ${totalBill.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Order;
