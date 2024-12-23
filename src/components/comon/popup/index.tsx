"use client";
import React, { useCallback, useState } from "react";
import "@/assets/style/global.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    code: string;
    title: string;
    price: number;
    description: string;
    networkProvider: unknown[];
    package_type: { title: string }[];
    slug: string;
    state: number;
  }[];
}
const Popup: React.FC<PopupProps> = ({ isOpen, onClose, data }) => {
  console.log(data, "data");
  const [openTogle, setopenTogle] = useState(true);
  const FnGetTogle = useCallback(() => {
    setopenTogle(!openTogle);
  }, [openTogle]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="popup fixed inset-0 ">
      {data.map((item, index) => (
        <div key={index} className="rounded-lg bg-[#fff]  ">
          <div className="px-8 py-6 ">
            <div className="flex justify-between ">
              <div>
                <h4 className="text-xl text-[#815bef]">viettel</h4>
              </div>
              <div onClick={onClose}>
                {/* <span className="material-icons text-white">search</span> */}
                <span className="material-icons text-[#c1c4cf] cursor-pointer">
                  cancel
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-2xl font-semibold">{item.title} -</span>
                <span className="text-xl text-red-600"> {item.price}</span>
              </div>
              <div className="flex gap-2">
                {item.package_type.map((item2, index) => (
                  <div
                    key={index}
                    className="flex justify-center rounded-lg border-[1px] border-[#815bef] cursor-pointer"
                  >
                    <p className="p-2">{item2.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex justify-between mt-1 cursor-pointer"
              onClick={FnGetTogle}
            >
              <h5 className="font-semibold">Thông tin chi tiết</h5>
            </div>
            <div
              className={`${
                openTogle ? "max-h-[200px]" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="py-2">
                <div
                  className="pl-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">Mua gói cước</h1>
              <div className="p-8  grid grid-cols-12 gap-4 bg-[#f8f8f8] rounded-lg">
                <div className="col-span-7">
                  <div className="mb-[20px]">
                    <h2 className="font-bold">Số thuê bao</h2>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-[10px]">
                    <div>
                      Hình thức thanh toán
                      <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <input className="w-[20px]" type="radio"></input>
                      <label>TK viễn thông</label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-[20px]">
                    <div>
                      Hình thức đăng ký <span className="text-red-500">*</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <input className="w-[20px]" type="radio"></input>{" "}
                      <label>SMS</label>
                      <input className="w-[20px]" type="radio"></input>{" "}
                      <label>OTP</label>
                    </div>
                  </div>
                  <div className="mb-[20px]">
                    <input
                      type="text"
                      placeholder="Chọn hoặc nhập mã"
                      className="w-full px-4 py-2 rounded-lg relative outline-none"
                    />
                    <input
                      className="absolute submit-code rounded-lg text-[#fff] text-xs cursor-pointer"
                      type="submit"
                      value="áp dụng"
                    />
                  </div>
                  <p className="cursor-pointer text-white text-center text-[15px] content-center rounded-lg  bg-[#815bef] pl-8 pr-8 pt-3 pb-3 mb-[30px] ">
                    Mua gói cước
                  </p>
                </div>
                <div className="col-span-5"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Popup;
