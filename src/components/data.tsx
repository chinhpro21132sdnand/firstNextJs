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
      <div className="mx-auto xl:max-w-[1320px]">
        <div className="flex justify-between  ">
          <div className="text-3xl font-bold">Data 3G/4G</div>
          <div className="flex items-center gap-2">
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
        <div className="flex justify-between gap-2">
          {data.map((item, index) => (
            <div key={index}>
              <div className="relative data-hov rounded-lg border border-blue-200  w-[248px] h-[195px] ">
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
                  <p className="text-white text-center content-center hover:text-purple-500 w-[214px] h-[43px]  bg-purple-500 cursor-pointer hover:bg-white hover:border hover:border-purple-500">
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