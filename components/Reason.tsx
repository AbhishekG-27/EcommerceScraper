import Image from "next/image";

const Reason = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="font-bold text-4xl text-[#393d46] my-9 w-[87%]">
        Why Choose Us
      </div>
      <div className="w-full flex justify-around bg-[#f6f7fb] py-14">
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/images/delivery-truck.png"
              alt="quality"
              width={100}
              height={100}
              className="border border-[#9f9f9f] rounded-full p-3"
            />
          </div>
          <div className="font-bold text-2xl text-[#393d46]">Free Delivery</div>
          <div className="font-normal text-lg text-[#9f9f9f]">
            Free Shipping only for selected region
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/images/credit-card.png"
              alt="quality"
              width={100}
              height={100}
              className="border border-[#9f9f9f] rounded-full p-3"
            />
          </div>
          <div className="font-bold text-2xl text-[#393d46]">
            Payment Method
          </div>
          <div className="font-normal text-lg text-[#9f9f9f]">
            Free Shipping only for selected region
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/images/warranty.png"
              alt="quality"
              width={100}
              height={100}
              className="border border-[#9f9f9f] rounded-full p-3"
            />
          </div>
          <div className="font-bold text-2xl text-[#393d46]">Warranty</div>
          <div className="font-normal text-lg text-[#9f9f9f]">
            Free Shipping only for selected region
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Image
              src="/images/support.png"
              alt="quality"
              width={100}
              height={100}
              className="border border-[#9f9f9f] rounded-full p-3"
            />
          </div>
          <div className="font-bold text-2xl text-[#393d46]">
            Customer Support
          </div>
          <div className="font-normal text-lg text-[#9f9f9f]">
            Free Shipping only for selected region
          </div>
        </div>
      </div>
      <Image src={"/images/reason_company.png"} width={900} height={300} alt="Sponsors" className="my-16" />
    </div>
  );
};

export default Reason;
