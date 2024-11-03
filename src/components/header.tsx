// pages/index.js (hoặc pages/home.js)
import "../assets/style/global.css";
import "../assets/style/components/_button.css";
const Header = () => {
  return (
    <header className="header fixed top-0 left-0 w-screen z-[999] bg-gray-800 mb-4">
      <div className="header-top w-[100%] mx-auto xl:max-w-[1320px] p-2">
        <div className="md:container w-[100%] xl:max-w-[1320px] mx-auto flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <img
              src="https://muavip.vn/_next/image?url=https%3A%2F%2Fmuavip.vn%2Fuploads%2Fimages%2Flogo%2Flogo_ngang.png&w=256&q=75"
              alt="Logo"
            />
          </div>
          <div className=" relative flex items-center gap-4">
            <input
              className="pl-11 py-2.5 border-none rounded-3xl bg-[#ffffff40] focus:outline-none h-10 text-white"
              type="text"
              placeholder="Tìm kiếm"
            />
            <div className="absolute  flex  items-center pl-3  ">
              <span className="material-icons text-white">search</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center ">
              <span className="material-icons text-white pr-1">storefront</span>
              <a href="#" className="text-white">
                Kênh bán
              </a>
            </div>
            <span className="w-[2px] h-4 bg-[#ffffff54] "></span>
            <div className="flex items-center ">
              <span className="material-icons text-white pr-1">work</span>
              <a href="#" className="text-white">
                Hợp tác kinh doanh
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom w-full py-2 md:py-3 bg-white shadow-sm">
        <div className=" md:flex md:px-2  md:container xl:max-w-[1320px] mx-auto justify-between items-center">
          <div>
            <ul className="flex item-center gap-3 ">
              <li>Trang chủ</li>
              <li>Gói cước</li>
              <li>Nạp Data</li>
              <li>Nạp thẻ</li>
              <li>Tra cứu,hỗ trợ</li>
            </ul>
          </div>

          <div className="flex gap-2">
            <img
              className="w-11 h-11"
              src="https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhotline.93ff83b4.png&w=48&q=75"
              alt=""
            />
            <div>
              <p className="text-[#777777] text-xs">Hotline</p>
              <p className="text-base font-bold">033 624 3999</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
