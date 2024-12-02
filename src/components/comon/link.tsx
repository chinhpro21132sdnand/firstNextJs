export interface IDataMenuMain {
  id: number;
  name: string;
  href: string;
  children: null | IDataMenuMain[];
}
const linkSideBar: IDataMenuMain[] = [
  {
    id: 1,
    name: "Trang chủ",
    href: "/",
    children: null,
  },
  {
    id: 2,
    name: "Gói cước",
    href: "/package",
    children: null,
  },
  {
    id: 3,
    name: "Nạp data",
    href: "/data",
    children: null,
  },
  {
    id: 4,
    name: "Nạp thẻ",
    href: "/phoneCard",
    children: null,
  },
  {
    id: 5,
    name: "Tra cứu và hỗ trợ",
    href: "/Support",
    children: null,
  },
];
export default linkSideBar;
