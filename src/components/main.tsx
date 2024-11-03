// Import Swiper styles
import "../assets/style/components/_button.css";

export default async function Main() {
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
        <div>
          <div className="Banner">
            <img
              src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Fbanner%2Fimage_2024-10-22_15-36-51_(1).png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="mt-2 mx-auto xl:max-w-[1320px]">
          <div>
            <div className="flex items-center gap-2">
              <img
                className="w-[430px] h-[170px]"
                src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549470.jpg&w=640&q=75"
                alt=""
              />
              <img
                className="w-[430px] h-[170px]"
                src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549476.jpg&w=640&q=75"
                alt=""
              />
              <img
                className="w-[430px] h-[170px]"
                src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Ffiles%2Fbanner-1724056549480.jpg&w=640&q=75"
                alt=""
              />
            </div>
          </div>
          <div className="flex mt-4 justify-between p-2">
            <div className="flex ">
              <img
                className="w-19 h-19 pr-2"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhotline.93ff83b4.png&w=48&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] text-s">Hỗ trợ</p>
                <p className="text-base font-bold">24/7 mọi lúc mọi nơi</p>
              </div>
            </div>
            <div className="flex">
              <img
                className="w-19 h-19 pr-2"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-banking.336ea393.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] text-s">Thanh toán</p>
                <p className="text-base font-bold">Nhanh chóng tiện lợi</p>
              </div>
            </div>
            <div className="flex">
              <img
                className="w-19 h-19 pr-2"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsale.19b25f06.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] text-s">Uư đãi</p>
                <p className="text-base font-bold">Hàng ngàn ưu đãi hấp dẫn</p>
              </div>
            </div>
            <div className="flex">
              <img
                className="w-19 h-19 pr-2"
                src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsave.e5a04aa6.png&w=64&q=75"
                alt=""
              />
              <div>
                <p className="text-[#777777] text-s">Đa dạng</p>
                <p className="text-base font-bold">
                  Sản phẩm đa dạng, phong phú
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className=" mx-auto xl:max-w-[1320px] mt">
          <div className="flex justify-between ">
            <p className="text-3xl font-bold ">Nạp thẻ điện thoại</p>
            <div className="flex items-center gap-2">
              {netWork.map((item, index) => (
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
          <div className=" flex justify-between">
            {data.map((item, index) => (
              <div key={index}>
                <div className="cardphone  bg-red-600 p-1 rounded-xl  cursor-pointer ">
                  <div className="flex justify-center pt-3 pb-3 pl-9 pr-9  bg-white rounded-t-lg ">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="flex justify-center p-2 text-white text-3xl font-bold ">
                    {item.price}
                  </div>
                </div>
                <div className="mt-2 text-xl font-bold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
