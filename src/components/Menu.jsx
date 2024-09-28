// Menu.jsx
import React from "react";
import "./Menu.css";
import Navbar from './Navbar';
// import Footer from './Footer';
import pizza1 from "../images/pizza1.png";
import pizza2 from "../images/pizza2.jpg";
import pizza3 from "../images/pizza3.jpg";
import r2 from "../images/r2.jpg";
import food5 from '../images/food_5.png';
import food6 from '../images/food_6.png';
import food7 from '../images/food_7.png';
import food8 from '../images/food_8.png';
import food9 from '../images/menu_2.png';
import food10 from '../images/food_12.png';
import food11 from '../images/food_17.png';
import food12 from '../images/food_19.png';
import food13 from '../images/food_20.png';
import food14 from '../images/menu_5.png';
import burger1 from '../images/burger1.png';
import burger2 from '../images/burger2.png';
import burger3 from '../images/burger3.png';
import r1 from '../images/r1.jpg';

function Menu({ cartItems, setCartItems }) {
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      {/* <Navbar cartItems={cartItems.length} /> */}
      <h1>Our Menu</h1>

      <section className="pizza-sec">
        <h2>Pizza</h2>
        <div className="menu-style">
          <div className="row1">
            <div className="img-con1">
              <img src={pizza1} alt="Chicken Fajita" className="p1" />
              <h4>Chicken Fajita</h4>
              <h3>$20.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Fajita", price: 20.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={pizza2} alt="Chicken Fajita" className="p2" />
              <h4>Chicken Fajita</h4>
              <h3>$20.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Fajita", price: 20.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={pizza3} alt="Chicken Fajita" className="p3" />
              <h4>Chicken Fajita</h4>
              <h3>$20.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Fajita", price: 20.00 })}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="img-con1">
              <img src={r2} alt="Chicken Fajita" className="p4" />
              <h4>Chicken Fajita</h4>
              <h3>$20.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Fajita", price: 20.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={pizza1} alt="Chicken Fajita" className="p5" />
              <h4>Chicken Fajita</h4>
              <h3>$20.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Fajita", price: 20.00 })}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="burger-sec">
        <h2>Burger</h2>
        <div className="menu-style">
          <div className="row1">
            <div className="img-con1">
              <img src={burger1} alt="Beef Burger" className="p1" />
              <h4>Beef Burger</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Beef Burger", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={burger2} alt="Lamb Burger" className="p2" />
              <h4>Lamb Burger</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Lamb Burger", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={burger3} alt="Chicken Burger" className="p3" />
              <h4>Chicken Burger</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Burger", price: 15.00 })}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="img-con1">
              <img src={burger3} alt="Veggie Burger" className="p4" />
              <h4>Veggie Burger</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Veggie Burger", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={r1} alt="Black Bean Burger" className="p5" />
              <h4>Black Bean Burger</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Black Bean Burger", price: 15.00 })}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-sec">
        <h2>Wraps</h2>
        <div className="menu-style">
          <div className="row1">
            <div className="img-con1">
              <img src={food5} alt="Beef Sandwich" className="food5" />
              <h4>Beef Sandwich</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Beef Sandwich", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food6} alt="Lamb Wrap" className="food6" />
              <h4>Lamb Wrap</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Lamb Wrap", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food7} alt="Chicken Wrap" className="food7" />
              <h4>Chicken Wrap</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chicken Wrap", price: 15.00 })}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="img-con1">
              <img src={food8} alt="Veggie Wrap" className="food8" />
              <h4>Veggie Wrap</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Veggie Wrap", price: 15.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food9} alt="Black Bean Wrap" className="food9" />
              <h4>Black Bean Wrap</h4>
              <h3>$15.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Black Bean Wrap", price: 15.00 })}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
   {/* sweets section */}
      <section className="sweets-sec">
        <h2>Sweets</h2>
        <div className="menu-style">
          <div className="row1">
            <div className="img-con1">
              <img src={food10} alt="Chocolate Cake" className="food10" />
              <h4>Chocolate Cake</h4>
              <h3>$7.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Chocolate Cake", price: 7.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food11} alt="Cheesecake" className="food11" />
              <h4>Cheesecake</h4>
              <h3>$7.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Cheesecake", price: 7.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food12} alt="Brownie" className="food12" />
              <h4>Brownie</h4>
              <h3>$6.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Brownie", price: 6.00 })}>Order Now</button>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="img-con1">
              <img src={food13} alt="Fruit Tart" className="food13" />
              <h4>Fruit Tart</h4>
              <h3>$7.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Fruit Tart", price: 7.00 })}>Order Now</button>
              </div>
            </div>
            <div className="img-con1">
              <img src={food14} alt="Ice Cream" className="food14" />
              <h4>Ice Cream</h4>
              <h3>$5.00</h3>
              <div className="order-btn-m">
                <button onClick={() => addToCart({ name: "Ice Cream", price: 5.00 })}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Menu;


