// Import Swiper styles
import "../assets/style/components/_button.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Main = () => {
  const netWork = [
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
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 10K",
      price: "10.000 đ",
    },
    {
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 20K",
      price: "20.000 đ",
    },
    {
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 30K",
      price: "30.000 đ",
    },
    {
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 40K",
      price: "40.000 đ",
    },
    {
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 50K",
      price: "50.000 đ",
    },
    {
      image:
        "https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fnetwork-provider%2Fviettel.png&w=128&q=75",
      title: "Thẻ Viettel 100K",
      price: "100.000 đ",
    },
  ];
  return (
    <section>
      <section>
        <div className=" w-screen overflow-hidden">
          <div className="Banner w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <img
                  className="w-[100%]"
                  src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fbanner%2Fimage_2024-10-22_15-36-51_(1).png&w=1920&q=75"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[100%]"
                  src="https://simcard.tektra.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fbanner%2Fimage_2024-10-22_15-42-57.png&w=1920&q=75"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-[100%]"
                  src="https://simcard.tektra.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fbanner%2Fimage_2024-10-22_15-36-51.png&w=1920&q=75"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mt-2 mx-auto xl:max-w-[1320px]">
          <div className="flex items-center justify-center gap-2 ">
            <img
              className="max-w-[30%] h-[auto] sm:w-1/3 sm:h-auto shrink"
              src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549470.jpg&w=640&q=75"
              alt=""
            />
            <img
              className="max-w-[30%] h-[auto] sm:w-1/3 sm:h-auto shrink"
              src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549476.jpg&w=640&q=75"
              alt=""
            />
            <img
              className="max-w-[30%] h-[auto] sm:w-1/3 sm:h-auto shrink"
              src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549480.jpg&w=640&q=75"
              alt=""
            />
          </div>
          <div className="mt-12 ml-4 ml-4 grid grid-cols-2 sm:grid-cols-12 gap-4  ">
            <div className="flex items-center sm:col-span-6 md:col-span-3">
              <img
                className="w-19 h-19 pr-2"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhotline.93ff83b4.png&w=48&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] md:text-sm sm:text-xs">Hỗ trợ</p>
                <p className="text-base font-bold  md:text-base xs:text-xs xs:max-w-[150px]">
                  24/7 mọi lúc mọi nơi
                </p>
              </div>
            </div>
            <div className="flex items-center  sm:col-span-6 md:col-span-3">
              <img
                className="w-19 h-19 pr-2 shrink"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-banking.336ea393.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] md:text-sm sm:text-xs">
                  Thanh toán
                </p>
                <p className=" font-bold md:text-text-base xs:text-xs xs:max-w-[150px] ">
                  Nhanh chóng tiện lợi
                </p>
              </div>
            </div>
            <div className="flex items-center  sm:col-span-6 md:col-span-3">
              <img
                className="w-19 h-19 pr-2 shrink"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsale.19b25f06.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] md:text-sm sm:text-xs">Uư đãi</p>
                <p className="md:text-base xs:text-xs font-bold xs:max-w-[150px] ">
                  Hàng ngàn ưu đãi hấp dẫn
                </p>
              </div>
            </div>
            <div className="flex items-center  sm:col-span-6 md:col-span-3">
              <img
                className="w-19 h-19 pr-2 shrink"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsave.e5a04aa6.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] md:text-sm sm:text-xs">Đa dạng</p>
                <p className="md:text-sm xs:text-xs font-bold  xs:max-w-[150px]">
                  Sản phẩm đa dạng, phong phú
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className=" mx-auto xl:max-w-[1320px] xs:p-[20px]">
          <div className="grid grid-cols-12 gap-2 ">
            <p className="md:text-3xl xs:text-xl font-bold  col-span-6 md:order-1 xs:order-1  ">
              Nạp thẻ điện thoại
            </p>
            <div className="flex items-center gap-2 col-span-6 md:justify-end md:order-2 xs:order-4 xs:mt-4 xs:mb-6">
              {netWork.map((item, index) => (
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
          <div className=" grid grid-cols-12 gap-4">
            {data.map((item, index) => (
              <div key={index} className="md:col-span-2 xs:col-span-4">
                <div className="cardphone  bg-red-600 p-1 rounded-xl  cursor-pointer xs:max-w-[125px] md:max-w-[246px]">
                  <div className="flex justify-center pt-3 pb-3 md:pl-9 md:pr-9 bg-white rounded-t-lg ">
                    <img src={item.image} alt="" className="shrink-1" />
                  </div>
                  <div className="flex justify-center p-2 text-white md:text-3xl sm:text-base font-bold ">
                    {item.price}
                  </div>
                </div>
                <div className="mt-2 md:text-xl sm:text-base font-bold xs:text-xs">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Main;
