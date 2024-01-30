import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { useState } from "react";

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
      />
    </div>
  );
};

export default App;
