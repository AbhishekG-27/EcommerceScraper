import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Image
        src={
          "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
        }
        alt="Banner"
        width={1980}
        height={500}
        className="w-full max-w-[100%]"
      />
    </>
  );
};

export default Banner;
