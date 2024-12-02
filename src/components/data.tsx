import "../assets/style/components/_button.css";
import "../assets/style/global.css";
export default function data() {
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
      title: "AT10K",
      price: "10.000 đ",
      description: {
        duration: "10 ngày",
        capacity: "10 GB / ngày",
      },
    },

    {
      title: "DataQT56",
      price: "14.000 đ",
      description: {
        duration: "10 ngày",
        capacity: " 5.6 GB / ngày",
      },
    },
    {
      title: "ST15KDS",
      price: "15.000 đ",
      description: {
        duration: "3 ngày",
        capacity: "3 GB / ngày",
      },
    },
    {
      title: "ST30KDS",
      price: "30.000 đ",
      description: {
        duration: "7 ngày",
        capacity: "7 GB / ngày",
      },
    },
    {
      title: "4G",
      price: "50.000 đ",
      description: {
        duration: "20 ngày",
        capacity: "20 GB / ngày",
      },
    },
  ];
  return (
    <section className="mt-12">
      <div className="mx-auto xl:max-w-[1320px] xs:p-[20px]">
        <div className="grid grid-cols-12 gap-2">
          <div className="md:text-3xl xs:text-xl font-bold  col-span-6 md:order-1 xs:order-1">
            Data 3G/4G
          </div>
          <div className="flex items-center gap-2 col-span-6 md:justify-end md:order-2 xs:order-4 xs:mt-4 xs:mb-6">
            {NetWork.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-xl bg-purple-500 cursor-pointer "
              >
                <p className=" pl-4 pr-4 text-white  text-sm">{item.title}</p>
              </div>
            ))}
          </div>
          <div className=" mt-4 md:mb-10 w-[100%] h-[2px] bg-slate-200 col-span-12 md:order-3 xs:order-3 "></div>
          <div className="md:order-4 xs:order-1 xs:flex xs:justify-end ">
            <span className="material-icons pr-1 col-span-6 md:hidden ">
              storefront
            </span>
          </div>
        </div>
        <div className="mt-4 mb-10 w-[100%] h-[2px] bg-slate-200"></div>
        <div className="grid md:grid-cols-5 xs:grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index}>
              <div className="relative data-hov rounded-lg border border-blue-200  md:max-w-[248px] md:max-h-[195px] xs:max-w-[216px] xs:max-h-[195px]  ">
                <p className="title-abs absolute rounded-b-lg  flex justify-center bg-blue-100 text-purple-500 pl-5 pr-5 p-2  ">
                  {item.title}
                </p>
                <p className="text-center text-red-500 text-lg font-semibold mb-4 mt-8">
                  {item.price}
                </p>
                <ul>
                  <li className="text-sm pl-[15px]">
                    . {item.description.capacity}
                  </li>
                  <li className="text-sm mb-2  pl-[15px]">
                    . {item.description.duration}
                  </li>
                </ul>
                <div className=" flex items-center justify-center  ">
                  <p className="text-white text-center content-center hover:text-purple-500  w-[214px] h-[43px]   bg-purple-500 cursor-pointer hover:bg-white hover:border  ">
                    Mua ngay
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
