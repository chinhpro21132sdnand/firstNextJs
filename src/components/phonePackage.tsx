"use client";
import { useState } from "react";
import "../assets/style/components/_button.css";
import "../assets/style/global.css";
export default function PhonePackage() {
  const NetWork = [
    {
      title: "Viettel",
    },
    {
      title: "Vinaphone",
    },
    {
      title: "Mobifone",
    },
    {
      title: "Vietnammobile",
    },
  ];
  const data = [
    {
      code: "BG120",
      content:
        "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      description:
        "<ul<li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      id: 20,
      networkProvider: { id: 9, name: "Viettel" },

      package_type: [
        { id: 1, title: "1T", value: 1 },
        { id: 3, title: "6T", value: 6 },
      ],
      price: 120000,
      slug: "BG120",
      state: 1,
      title: "BG120",
    },
    {
      code: "VG90",
      content:
        "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      description:
        "<ul<li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      id: 21,
      networkProvider: { id: 9, name: "Viettel" },

      package_type: [
        { id: 1, title: "1T", value: 1 },
        { id: 3, title: "6T", value: 6 },
      ],
      price: 90000,
      slug: "VG90",
      state: 1,
      title: "VG90",
    },
    {
      code: "UT120",
      content:
        "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      description:
        "<ul<li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      id: 22,
      networkProvider: { id: 9, name: "Viettel" },

      package_type: [
        { id: 1, title: "1T", value: 1 },
        { id: 3, title: "6T", value: 6 },
      ],
      price: 120000,
      slug: "UT120",
      state: 1,
      title: "UT120",
    },
    {
      code: "UT170",
      content:
        "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      description:
        "<ul<li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
      id: 23,
      networkProvider: { id: 9, name: "Viettel" },

      package_type: [
        { id: 1, title: "1T", value: 1 },
        { id: 3, title: "6T", value: 6 },
      ],
      price: 170000,
      slug: "UT170",
      state: 1,
      title: "UT170",
    },
  ];
  const [selectedValues, setSelectedValues] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  // Hàm cập nhật giá trị đã chọn
  const setDataPackage = (
    itemId: number,
    networkValue: number,
    index: number
  ) => {
    console.log(selectedValues, "11");
    setSelectedValues((prev) => ({
      ...prev,
      [itemId]: networkValue,
    }));
  };
  return (
    <section className="mt-12">
      <div className="mx-auto xl:max-w-[1320px]">
        <div className="flex justify-between  ">
          <div className="text-3xl font-bold">Đăng ký gói cước</div>
          <div className="flex  items-center gap-2 ">
            {NetWork.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-xl bg-purple-500 cursor-pointer "
              >
                <p className=" pl-4 pr-4 text-white  text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 mb-10 w-[100%] h-[2px] bg-slate-200"></div>
        <div className="bg-emerald-50 pt-6 pb-6 pl-4 pr-4 rounded-lg border border-slate-300">
          <div className="flex flex-wrap justify-between gap-2">
            {data.map((item, index) => (
              <div key={index}>
                <div className="phonePackage border border-slate-300 cursor-pointer  rounded-lg w-[420px] h-[280px] bg-white">
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-2 ">
                        <img
                          className="w-[40px] h-[40px] object-cover "
                          src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpackage.368c00b3.png&w=48&q=75"
                          alt=""
                        />
                        <div>
                          <p className="text-[#815bef]">Viettel</p>
                          <p className="font-extrabold text-base">
                            {item.title}
                          </p>
                          <p className="text-red-500 font-medium">
                            {item.price * (selectedValues[item.id] || 1)}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        {item.package_type.map((network, index) => (
                          <div
                            onClick={() =>
                              setDataPackage(item.id, network.value)
                            }
                            key={index}
                          >
                            <p
                              className={`${
                                selectedValues[item.id] == network.value
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
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                    <p className="text-sm text-[#815bef]">Xem chi tiết ...</p>
                    <div className="flex gap-4 items-center   border-t-2 border-dashed border-[#d1d1d1] pt-[7px]">
                      <p>
                        <span className="material-icons text-white iconStore">
                          storefront
                        </span>
                      </p>
                      <p className="text-[#815bef] text-center  text-[15px] content-center rounded-lg border-solid border border-[#815bef] bg-emerald-50 pl-8 pr-8 pt-2 pb-2 ">
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
        </div>
      </div>
    </section>
  );
}
