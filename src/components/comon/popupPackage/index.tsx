"use client";
import React, { useState } from "react";
import "@/assets/style/global.css";
import NumberFormatter from "@/validate/number";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id: number;
    title: string;
    price: number;
    description: {
      duration: string;
      capacity: string;
    };
  }[];
}
const PopupPackage: React.FC<PopupProps> = ({ isOpen, onClose, data }) => {
  const [count, setcount] = useState(1);
  const handlecountDown = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  const handlecountUp = () => {
    setcount(count + 1);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="popup fixed inset-0 ">
      {data.map((item, index) => (
        <div key={index} className="rounded-lg bg-[#fff] overflow-hidden">
          <div className="flex justify-between rouded-lg bg-[#e8f1fd]  p-4 items-center ">
            <div>
              <h4 className="text-2xl font-medium ">
                mua data (nạp trực tiếp / mã data)
              </h4>
            </div>
            <div onClick={onClose}>
              <span className="material-icons text-[#c1c4cf] cursor-pointer">
                cancel
              </span>
            </div>
          </div>
          <div className=" p-5">
            <div className="rounded-lg bg-[#fff] shadow-stone-700 border-2   p-4">
              <div>
                <span>Tên gói:</span> {item.title}
              </div>
              <div>
                <span>Thời gian:</span> 10 ngày
              </div>
              <div>
                <span>Giá cước:</span> {NumberFormatter(item.price)} đ
              </div>
              <div>
                <span>Nhà mạng:</span> Viettel
              </div>
            </div>
            <div className="mt-2">
              <p>Số lượng</p>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    className="material-icons p-1 rounded-lg bg-[#f5f5f5] cursor-pointer"
                    aria-label="Giảm số lượng"
                    title="Giảm số lượng"
                    onClick={handlecountDown}
                    disabled={count <= 1}
                  >
                    remove
                  </button>
                  <p className="rounded-lg border-2 border-[#f5f5f5]">
                    <p className="px-7 py-1">{count}</p>
                  </p>
                  <button
                    type="button"
                    className="material-icons p-1 rounded-lg bg-[#f5f5f5] cursor-pointer"
                    aria-label="Tăng số lượng"
                    title="Tăng số lượng"
                    onClick={handlecountUp}
                  >
                    add
                  </button>
                </div>
                <div>{NumberFormatter(item.price * count)} đ</div>
              </div>
            </div>
            <div className="mt-2">
              <p>Hình thức mua</p>
              <div className="flex justify-center gap-4">
                <div>
                  <input className="w-[20px]" type="radio" name="buyType" />{" "}
                  <label>Mua mã thẻ</label>
                </div>
                <div>
                  <input className="w-[20px]" type="radio" name="buyType" />{" "}
                  <label>Nạp điện thoại</label>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p>Hình thức Thanh toán</p>
              <div className="flex justify-center gap-4">
                <div>
                  <input className="w-[20px]" type="radio" name="buyType" />{" "}
                  <label>VietQR</label>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p>Nhập số thuê bao</p>
              <div className="">
                <div>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="w-full px-4 py-2 rounded-lg border-2 border-[#f5f5f5] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p>Mã giảm giá</p>
              <div className="grid grid-cols-12 gap-2">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="col-span-9 px-4 py-2 rounded-lg border-2 border-[#f5f5f5] outline-none"
                />
                <input
                  className="col-span-3 rounded-lg bg-[#825ceb] text-[#fff] text-base cursor-pointer"
                  type="submit"
                  value="áp dụng"
                />
              </div>
            </div>
            <p className="mt-1 text-medium font-semibold">
              Lưu ý: Quý khách vui lòng nhập đúng số điện thoại nhận mã thẻ.
              Trường hợp nhập sai, Shop 1sell không hỗ trợ.
            </p>
          </div>
          <div className=" rouded-lg bg-[#e8f1fd]  p-4 items-center ">
            <div className="w-[100%] flex justify-between">
              <div className="text-2xl font-medium ">Tổng thanh toán</div>
              <div>{NumberFormatter(item.price * count)} đ</div>
            </div>
            <div className="flex justify-center w-[100%] py-1 rounded-lg bg-[#825ceb] text-[#fff]">
              {" "}
              thanh toán điện tử{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PopupPackage;
