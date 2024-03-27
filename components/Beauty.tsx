import beauty from "@/lib/utils/beauty";
import Image from "next/image";
const Beauty = async () => {
  const data = await beauty();

  return (
    <div className="w-full flex justify-center">
      <div className="w-[87%]">
        <div className="font-bold text-4xl text-[#393d46] my-9">Beauty</div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-5 gap-4 border-2 border-[#393d46] rounded-lg"
              >
                <Image src={item.image} alt="beauty" width={200} height={200} />
                <div className="text-center font-medium text-lg text-[#393d46]">
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

export default Beauty;
