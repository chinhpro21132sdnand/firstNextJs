"use client";
import PackageProps from "@/types/packages";
import React, { useState } from "react";
import Popup from "@/components/comon/popup/index";
interface HomePackageProps {
  Packages: PackageProps[];
  LinkNetwork: (networkId: number) => void;
  LinkMonth: (monthId: number) => void;
}
interface PackageType {
  title: string;
}

interface NetworkProvider {
  id: number;
  name: string;
}
interface PopupData {
  code: string;
  title: string;
  price: number;
  description: string;
  networkProvider: NetworkProvider[];
  package_type: PackageType[];
  slug: string;
  state: number;
}
const netWork = [
  {
    id: 1,
    title: "Viettel",
  },
  {
    id: 2,
    title: "Vinaphone",
  },
  {
    id: 3,
    title: "Mobifone",
  },
  {
    id: 4,
    title: "Vietnammobile",
  },
];
const packages = [
  { month: "1T", id: 1 },
  { month: "3T", id: 3 },
  { month: "6T", id: 6 },
  { month: "12T", id: 12 },
];
const price = [
  { id: 1, price: "100.000" },
  { id: 2, price: "100.000-150.000" },
  { id: 3, price: "200.000 - 250.000" },
  { id: 4, price: "250.000" },
];

const HomePackage: React.FC<HomePackageProps> = ({
  Packages,
  LinkNetwork,
  LinkMonth,
}) => {
  const [selectedValues, setSelectedValues] = useState(
    Packages.reduce((acc, item) => ({ ...acc, [item.title]: 1 }), {})
  );
  // Hàm cập nhật giá trị đã chọn
  const setDataPackage = (title: string, networkValue: number) => {
    setSelectedValues((prev) => ({
      ...prev,
      [title]: networkValue,
    }));
  };
  const [Open, setOpen] = useState(false);
  const [popupData, setPopupData] = useState<PopupData[]>([]);
  const handleClickOpen = (item: PopupData) => {
    console.log("11111");
    setPopupData([item]);
    setOpen(true);
  };
  const handleClosePopup = () => {
    setOpen(false);
    setPopupData([]);
  };
  return (
    <section>
      <div className="w-screen overflow-hidden">
        <div className="Banner mt-10 mx-auto xl:max-w-[1320px]">
          <div className="grid grid-cols-12 mb-4 gap-3">
            <div className="col-span-3 rounded-lg border border border-inherit  bg-white">
              <div className=" p-4 ">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl	font-medium	">Filter</h2>
                  </div>
                  <div className="flex gap-1 text-slate-400">
                    <h3 className="text-lg font-medium ">Reset</h3>
                    <span className="material-icons">restart_alt</span>
                  </div>
                </div>
                <div className="mt-1 mb-5 w-[100%] h-[2px] bg-slate-200"></div>
                <div className="mt-4">
                  <h3 className="text-lg	font-semibold	">Nhà mạng</h3>
                  {netWork.map((item, index) => (
                    <ul key={index} className="p-3">
                      <li className="flex gap-2">
                        <input
                          className="cursor-pointer form-radio h-5 w-5 text-primary border-gray-300 transition duration-200"
                          type="radio"
                          value={`${item.id}`}
                          onClick={() => LinkNetwork(item.id)}
                          name="network"
                        ></input>
                        <div>{item.title}</div>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg	font-semibold	">Chu kỳ</h3>
                  <ul className="p-3 grid grid-cols-2 gap-4  ">
                    {packages.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <input
                          className="cursor-pointer form-radio h-5 w-5 text-primary border-gray-300 transition duration-200"
                          type="radio"
                          value={`${item.id}`}
                          onClick={() => LinkMonth(item.id)}
                          name="chuky"
                        ></input>
                        <div>{item.month}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg	font-semibold	">Gía gói/tháng</h3>
                  {price.map((item, index) => (
                    <ul key={index} className="p-3">
                      <li className="flex gap-2">
                        <input
                          className="cursor-pointer form-radio h-5 w-5 text-primary border-gray-300 transition duration-200"
                          type="radio"
                          value={`${item.id}`}
                          name="package"
                        ></input>
                        <div>{item.price}</div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-9">
              <div className=" p-4 ">
                <div>
                  <h1 className="text-3xl font-medium	">
                    Gói Cước ({Packages.length})
                  </h1>
                  <div className="mb-5 w-[100%] h-[2px] bg-slate-200"></div>
                </div>
                <div className="mt-10 bg-emerald-50 pt-6 pb-6 pl-4 pr-4 rounded-lg border border-slate-300">
                  <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-3">
                    {Packages.map((item, index) => (
                      <div key={index}>
                        <div className="phonePackage border border-slate-300 cursor-pointer  rounded-lg w-[450px] h-[280px] bg-white">
                          <div className="p-4">
                            <div className="flex justify-between mb-4">
                              <div className="flex items-center gap-2 ">
                                <img
                                  className="w-[40px] h-[40px] object-cover "
                                  src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpackage.368c00b3.png&w=48&q=75"
                                  alt=""
                                />
                                <div>
                                  <p className="text-[#815bef]">
                                    {item.networkProvider.name}
                                  </p>
                                  <p className="font-extrabold text-base">
                                    {item.title}
                                  </p>
                                  <p className="text-red-500 font-medium">
                                    {item.price *
                                      (selectedValues[item.title] || 1)}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-2 items-center">
                                {item.package_type.map((network, index) => (
                                  <div
                                    onClick={() =>
                                      setDataPackage(item.title, network.value)
                                    }
                                    key={index}
                                  >
                                    <p
                                      className={`${
                                        selectedValues[item.title] ==
                                        network.value
                                          ? "titleActive "
                                          : ""
                                      }p-2 border border-[#815bef] rounded-lg`}
                                    >
                                      {network.title}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div
                              className="text-[16px] mb-6"
                              dangerouslySetInnerHTML={{
                                __html: item.content,
                              }}
                            ></div>
                            <p className="text-sm text-[#815bef]">
                              Xem chi tiết ...
                            </p>
                            <div className="flex gap-4 items-center   border-t-2 border-dashed border-[#d1d1d1] pt-[7px]">
                              <p>
                                <span className="material-icons text-white iconStore">
                                  storefront
                                </span>
                              </p>
                              <p
                                onClick={() => handleClickOpen(item)}
                                className="text-[#815bef] text-center  text-[15px] content-center rounded-lg border-solid border border-[#815bef] bg-emerald-50 pl-8 pr-8 pt-2 pb-2 "
                              >
                                Xem nhanh
                              </p>
                              <p className="text-white text-center text-[15px] content-center rounded-lg  bg-[#815bef] pl-8 pr-8 pt-2 pb-2 ">
                                Mua gói cước
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Popup
                    isOpen={Open}
                    onClose={handleClosePopup}
                    data={popupData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePackage;
