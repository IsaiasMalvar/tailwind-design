import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import Select from "./Select";
const ShoeDetail = () => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row-reverse dark:text-white">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex justify-center items-center h-full  bg-gradient-to-br from-[#f637cf] via-[#e3d876] to-[#4dd4c6] ">
          <img src={nike1} alt="" className="animate-float" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        <div className="flex space-x-6 ">
          <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>
        <div className="space-x-10">
          <button className="active:scale-75 transition h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black">
            Add to bag
          </button>

          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
