import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";

const App = () => {
  return (
    <div className=" p-10 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
};

export default App;
