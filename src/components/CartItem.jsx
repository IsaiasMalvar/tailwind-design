/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
  return (
    <div className="hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-100 flex space-x-3">
      <img src={item.src} alt="" className="h-24" />
      <div className="space-y-2">
        <div className="font-bold">{item.title}</div>
        <div className="text-small text-gray-400">{item.description}</div>
      </div>
      <div className="font-bold">{item.price}$</div>
    </div>
  );
};

export default CartItem;
