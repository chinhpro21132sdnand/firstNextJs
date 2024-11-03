"use client";
import { useState } from "react";

export default function NewPaper() {
  const data = [
    {
      img: "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnews%2Fnews-1720525068436.png&w=384&q=75",
      title: "Viettel mong muốn thay đổi định kiến gói roaming đắt đỏ",
      content:
        "Viettel tối ưu cơ sở hạ tầng, cung cấp 28 gói cước data và phủ roaming tại 105 quốc gia nhằm gỡ bỏ rào cản về giá cước, theo Phó tổng giám đốc Viettel Telecom.",
      date: "11:36:45 31/10/2024",
    },
    {
      img: "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnews%2Fnews-1720525068436.png&w=384&q=75",
      title: "Những điều cần lưu ý khi mua sim số đẹp",
      content:
        "Viettel tối ưu cơ sở hạ tầng, cung cấp 28 gói cước data và phủ roaming tại 105 quốc gia nhằm gỡ bỏ rào cản về giá cước, theo Phó tổng giám đốc Viettel Telecom.",
      date: "11:36:45 31/10/2024",
    },
    {
      img: "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnews%2Fnews_6.png&w=640&q=75",
      title: "TỔNG HỢP CÁC GÓI CƯỚC MOBIFONE HOT NHẤT 2024",
      content:
        "Viettel tối ưu cơ sở hạ tầng, cung cấp 28 gói cước data và phủ roaming tại 105 quốc gia nhằm gỡ bỏ rào cản về giá cước, theo Phó tổng giám đốc Viettel Telecom.",
      date: "11:36:45 31/10/2024",
    },
    {
      img: "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnews%2Fnews_5.jpg&w=384&q=75",
      title: "Định nghĩa và lựa chọn SIM số đẹp theo phong thuỷ năm 2024",
      content:
        "Viettel tối ưu cơ sở hạ tầng, cung cấp 28 gói cước data và phủ roaming tại 105 quốc gia nhằm gỡ bỏ rào cản về giá cước, theo Phó tổng giám đốc Viettel Telecom.",
      date: "11:36:45 31/10/2024",
    },
  ];
  const dataNew = [
    { title: "Tất cả", id: 1 },
    { title: "Sim", id: 2 },
    { title: "Khuyến mãi", id: 3 },
    { title: "Gói cước", id: 4 },
    { title: "Tin tức", id: 7 },
  ];
  const [button, setbutton] = useState(1);
  const isActive = (itemId: number) => {
    setbutton(itemId);
  };
  return (
    <section className="mt-12">
      <div className="mx-auto xl:max-w-[1320px]">
        <div className="text-4xl font-bold">Tin Tức,Sự Kiện</div>
        <div className="mt-4 mb-2 w-[100%] h-[2px] bg-slate-200"></div>
        <div className="flex gap-2 mb-10">
          {dataNew.map((item, index) => (
            <div key={index}>
              <div
                onClick={() => isActive(item.id)}
                className={`${
                  button == item.id ? "isActive" : ""
                } pl-2 pr-2 pt-1 pb-1 rounded-xl border  border-[#8661e8] text-[#8661e8] hover:bg-[#8661e8] hover:text-white text-sm cusor-pointer`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2  gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex">
                <div className="w-[40%] rounded-lg overflow-hidden ">
                  <img
                    className="hover:scale-105 ease-in-out duration-300  "
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="w-[60%] pl-2 flex flex-col justify-between ml-4 w-full">
                  <p className="text-lg font-semibold ">{item.title}</p>
                  <p className="pt-1 pb-1 text-base text-slate-400	">
                    {item.date}
                  </p>
                  <p className="text-ellipsis overflow-hidden w-[100%] h-[40px] text-sm line-clamp-2">
                    {item.content}
                  </p>
                  <p className="text-[#8661e8] text-sm">Xem chi tiết ...</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
