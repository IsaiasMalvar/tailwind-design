import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";
/* eslint-disable react/prop-types */
const CartItem = ({ item: { product, qty, size } }) => {
  return (
    <div className="cursor-pointer bg-gray-100 hover:bg-[#DAFFA2] space-y-2 p-3 ">
      <div className="p-2 flex space-x-3">
        <img src={product.src} alt="" className="h-24" />
        <div className="space-y-2">
          <div className="font-bold">{product.title}</div>
          <div className="text-small text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold">{product.price}$</div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-6 pl-32">
          <div>
            <div className="font-bold ">SIZE</div>
            <Select
              options={SIZES}
              title={""}
              className={" p-1 w-16 "}
              defaultValue={size}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              options={QTY}
              title={""}
              className={" p-1 w-16 "}
              defaultValue={qty}
            />
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
