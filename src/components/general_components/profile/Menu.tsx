type Props = {
  data: [{ icon: string; menuItem: string }];
};

const Menu = ({ data }: Props) => {
  return (
    <>
      <div className="w-[200px] h-[802px] py-[12px]  pr-[10px] flex flex-col justify-between">
        <div className="">
          {data.map((item, index) => (
            <div
              className="flex items-center gap-[12px] w-[190px] h-[52px] px-[10px]"
              key={item.menuItem}
            >
              {index < data.length - 1 && (
                <>
                  {" "}
                  <div className="flex justify-center items-center w-[34px] h-[34px] rounded-[32px] bg-[#EFEDEA] ">
                    <img src={item.icon} height="16px" width="16px" />
                  </div>
                  <h2 className="inter w-[104px] h-[19px] text-[#404040]  font-[400] text-[14px] leading-[20px]">
                    {item.menuItem}
                  </h2>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[12px] w-[190px] h-[52px] px-[10px]">
          <div className="flex justify-center items-center w-[34px] h-[34px] rounded-[32px] bg-[#EFEDEA] ">
            <img src={data[data.length - 1].icon} height="16px" width="16px" />
          </div>
          <h2 className="inter w-[104px] h-[19px] text-[#404040]  font-[400] text-[14px] leading-[20px]">
            {data[data.length - 1].menuItem}
          </h2>
        </div>
      </div>
      <div className="w-[200px] h-[75px] p-[30px]">
        <p className="inter w-[24px] h-[15px] text-[#5F5F61]">v.1.2</p>
      </div>
    </>
  );
};

export default Menu;
