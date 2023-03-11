import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ProductModal = ({ data, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[50]">
      <div className="fixed top-0 right-0 w-full md:w-[65%] bg-[rgba(0,0,0,0.5)] h-full z-[50] flex justify-center items-center">
        <div className="bg-[#FAFAFB] justify-between flex rounded-[2.25rem] px-6 py-5 relative">
          <div className="mr-6 my-auto">
            <img
              className="w-[10rem] h-[10rem]"
              src={data.image}
              alt="product"
            />
            <button className="border-[1px] font-[600] rounded-md py-1 border-main-red text-main-red mt-3 w-full">
              Add
            </button>
          </div>
          <div className="max-w-[28rem] space-y-1 my-auto">
            <div className="font-[600] text-[1.25rem]">{data.title}</div>
            <div>{data.description}</div>
            <div className="text-[#617EFF] font-Gilroy">
              <span className="text-[0.75rem] font-[500] text-[#6c6e8bbf]">
                Price :
              </span>
              <span className="font-[600] text-[0.625rem]"> $</span>
              <span className="font-[700] ml-[0.0625rem]">{data.price}</span>
            </div>
            <div className="text-[#6c6e8bbf] font-[500] text-[0.75rem] flex items-center gap-x-[0.1875rem]">
              <div className="text-main-red">
                <AiFillStar />
              </div>
              {data.rating.rate} ({data.rating.count})
            </div>
          </div>
          <div
            className="bg-[#FAFAFB] absolute -top-[3rem] right-2 p-2 rounded-xl text-[1.3rem] font-[700] cursor-pointer"
            onClick={onClose}
          >
            <RxCross1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
