"use client";
import HomePackage from "@/components/package/homePackage";
import React, { useState } from "react";
const initialViettel = [
  {
    code: "BG120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 1,
    networkProvider: { id: 1, name: "Viettel" },
    package_type: [
      { id: 1, title: "1T", value: 1 },
      { id: 6, title: "6T", value: 6 },
    ],
    price: 120000,
    slug: "BG120",
    state: 1,
    title: "BG120",
  },
  {
    code: "VG120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 1,
    networkProvider: { id: 1, name: "Viettel" },
    package_type: [
      { id: 1, title: "1T", value: 1 },
      { id: 6, title: "6T", value: 6 },
    ],
    price: 120000,
    slug: "VG120",
    state: 1,
    title: "VG120",
  },
  {
    code: "EG120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 1,
    networkProvider: { id: 1, name: "Viettel" },
    package_type: [
      { id: 1, title: "1T", value: 1 },
      { id: 6, title: "6T", value: 6 },
    ],
    price: 120000,
    slug: "EG120",
    state: 1,
    title: "EG120",
  },
  {
    code: "DG120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 1,
    networkProvider: { id: 1, name: "Viettel" },
    package_type: [
      { id: 1, title: "1T", value: 1 },
      { id: 6, title: "6T", value: 6 },
    ],
    price: 120000,
    slug: "DG120",
    state: 1,
    title: "DG120",
  },
  {
    code: "VN120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 2,
    networkProvider: { id: 2, name: "Vinaphone" },
    package_type: [{ id: 12, title: "12T", value: 12 }],
    price: 120000,
    slug: "VN120",
    state: 1,
    title: "VN120",
  },
  {
    code: "UT1500",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 2,
    networkProvider: { id: 2, name: "Vinaphone" },
    package_type: [{ id: 12, title: "12T", value: 12 }],
    price: 120000,
    slug: "UT1500",
    state: 1,
    title: "UT1500",
  },
  {
    code: "VNNP120",
    content:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    description:
      "<ul><li>• 01 GB/ngày, hết data dừng</li><li>• Nội mạng: 1500p (cuộc gọi dưới 10p)</li><li>• Ngoại mạng: 30p</li></ul>",
    id: 2,
    networkProvider: { id: 2, name: "Vinaphone" },
    package_type: [{ id: 12, title: "12T", value: 12 }],
    price: 120000,
    slug: "VNNP120",
    state: 1,
    title: "VNNP120",
  },
];
const Home = () => {
  const [viettel, setViettel] = useState(initialViettel);
  const linkNetwork = (networkId: number) => {
    const filteredItems = initialViettel.filter(
      (item) => item.id === networkId
    );
    setViettel(filteredItems);
  };
  const linkMonth = (monthId: number) => {
    const filteredItems2 = initialViettel
      .map((item) => {
        return {
          ...item,
          package_type: item.package_type,
        };
      })
      .map((item2) => {
        const item3 = item2.package_type.filter((item) => item.id === monthId);
        return {
          ...item2,
          package_type: item3,
        };
      })
      .filter((item) => item.package_type.length > 0);
    setViettel(filteredItems2);
  };

  return (
    <div>
      {/* Truyền dữ liệu của Viettel vào HomePackage */}
      <HomePackage
        Packages={viettel}
        LinkNetwork={linkNetwork}
        LinkMonth={linkMonth}
      />
    </div>
  );
};

export default Home;
