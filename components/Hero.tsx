import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex justify-center my-12">
      <div className="w-[87%] flex flex-col">
        <div className="font-bold text-4xl text-[#393d46] my-9">Categories</div>
        <div className="flex justify-between">
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/jacket.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Jacket</div>
          </div>
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/shirt.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Shirt</div>
          </div>
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/sneakers.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Shoes</div>
          </div>
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/trousers.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Pants</div>
          </div>
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/woman-clothes.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Dress</div>
          </div>
          <div className="bg-[#f6f7fb] flex flex-col justify-center items-center px-14 py-7 gap-2">
            <div>
              <Image
                src={"/images/accessory.png"}
                width={80}
                height={80}
                alt="Jacket"
              />
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">Accessories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
