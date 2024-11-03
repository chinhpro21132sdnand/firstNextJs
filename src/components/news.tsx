export default function New() {
  const data = [
    {
      img: "https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffind.8d55a58b.png&w=48&q=75",
      title: "Hỗ trợ",
      content: "Tra cứu thông tin dịch vụ",
    },
    {
      img: "https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquestion.dc5efae6.png&w=48&q=75",
      title: "FAQS",
      content: "Hướng dẫn sử dụng ",
    },
    {
      img: "https://muavip.vn/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdecree.39642306.png&w=48&q=75",
      title: "Tra cứu",
      content: "Thông tư,nghị định",
    },
  ];
  return (
    <section className="mt-12">
      <div className="mx-auto xl:max-w-[1320px]">
        <div className="text-4xl font-bold">Tra cứu và hỗ trợ</div>

        <div className="mt-4 mb-10 w-[100%] h-[2px] bg-slate-200"></div>

        <div className="w-[100%] rounded-lg border-solid border-t-2 border-slate-200 bg-emerald-50 ">
          <div className="grid grid-column-3 grid-flow-col gap-4  pt-3 pb-3 pl-5 pr-5">
            {data.map((item, index) => (
              <div key={index}>
                <div className="flex  rounded-lg pt-4 pb-4 pl-3 bg-white hover:scale-105 ease-out  duration-300 ">
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="pl-3 ">
                    <p className="text-base ">{item.title}</p>
                    <p className="font-bold text-sm">{item.content}</p>
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
