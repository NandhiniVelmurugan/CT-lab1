import React, { useState } from 'react';
import './Cart.css';

const ShoppingCart = () => {
  const products = [
    {
      id: 1,
      name: 'Engineering Mechanics: Statics',
      price: 2500,
    },
    {
      id: 2,
      name: 'Engineering Mechanics',
      price: 8950,
    },
    {
      id: 3,
      name: 'Computer Organization and Design',
      price: 4000,
    },
    {
      id: 4,
      name: 'Principles of Tissue Engineering',
      price: 4000,
    },
    {
      id: 5,
      name: 'Biomechanics',
      price: 4000,
    },
    {
      id: 6,
      name: 'Chemical Reaction Engineering',
      price: 4000,
    },
  ];

  // Cart logic
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    let found = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === item.id) {
        cart[i].count++;
        found = true;
        break;
      }
    }

    if (!found) {
      item.count = 1;
      setCart([...cart, item]);
    }

    setTotal(total + item.price);
  };

  const removeItem = (item) => {
    const index = cart.indexOf(item);

    if (index !== -1) {
      setTotal(total - cart[index].price * cart[index].count);
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const emptyCart = () => {
    setCart([]);
    setTotal(0);
  };

  const checkout = () => {
    // Calculate the total amount with 2 decimal places
    const formattedTotal = total.toFixed(2);
  
    // Display an alert with the total amount
    alert(`Total Amount: $${formattedTotal}`);
  
    // After the checkout process, you can clear the cart and update the total.
    emptyCart();
  };

  return (
    <div className="container">
      <div className="col-md-6">
        <h2>BOOKS</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>BOOKS</th>
              <th>Price</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price.toFixed(0)}</td>
                <td>
                  <button
                    onClick={() => addItem(item)}
                    className="btn btn-sm btn-info custom-add-to-cart-button"
                  >
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <h2>My Shopping Cart</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((myItem) => (
              <tr key={myItem.id}>
                <td>{myItem.id}</td>
                <td>{myItem.name}</td>
                <td>{myItem.price}</td>
                <td>{myItem.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="text-center">
          {cart.length === 0 ? 'Your shopping cart is empty.' : ''}
        </span>
        <div className="clearfix"></div>
        <span className="pull-right alert alert-success">
          Total Price:  {total.toFixed(0)}
        </span>
        <button
          onClick={emptyCart}
          style={{ display: cart.length > 0 ? 'block' : 'none' }}
          className="pull-left alert alert-danger"
        >
          Empty your cart
        </button>
        <div className="checkout-button-container">
  <button
    onClick={checkout}
    style={{ display: cart.length > 0 ? 'block' : 'none' }}
    className="checkout-button"
  >
    Checkout
  </button>
</div>

      </div>
    </div>
  );
};

export default ShoppingCart;
