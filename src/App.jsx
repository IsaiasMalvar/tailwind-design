import Cart from "./components/Cart";

import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { useState } from "react";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className=" p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSideBarOpen(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSideBarOpen}
        onClickClose={() => setIsSideBarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
};

export default App;
