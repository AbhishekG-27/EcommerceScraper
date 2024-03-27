import newArrival from "@/lib/utils/newArrival";
import Image from "next/image";

const NewArrival = async () => {
  const data = await newArrival();

  return (
    <div className="w-full flex justify-center">
      <div className="w-[87%]">
        <div className="font-bold text-4xl text-[#393d46] my-9">
          New Arrival
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#f6f7fb] p-5 gap-5"
              >
                <Image
                  src={item.image}
                  alt="new arrival"
                  width={300}
                  height={300}
                />
                <div className="text-center font-medium text-2xl text-[#393d46]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
