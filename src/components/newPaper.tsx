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
      title: "Viettel mong muốn thay đổi định kiến gói roaming đắt đỏ",
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
        <div className="flex gap-2 mb-4">
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
        <div className="grid grid-column-2 grid-flow-col gap-4">
          {data.map((item, index) => (
            <div className="flex">
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.date}</p>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
