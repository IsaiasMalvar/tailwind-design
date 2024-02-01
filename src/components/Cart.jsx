/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-5 dark:text-white">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
