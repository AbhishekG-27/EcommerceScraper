"use client";
import { FaCartShopping } from "react-icons/fa6";
import { scrapeAmazon } from "@/lib/utils/amazon";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Product = () => {
  const searchParams = useSearchParams();
  const link: string = searchParams.get("link") || "";
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    ratings: "",
  });
  const scrapeProduct = async () => {
    const data = await scrapeAmazon(link);
    setProduct(data);
  };
  useEffect(() => {
    scrapeProduct();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center my-9">
        <div className="flex w-[87%] gap-8">
          <div className="w-[45%] overflow-hidden relative">
            <Image
              src={product.image}
              alt="image"
              fill={true}
              objectFit="contain"
            />
          </div>
          <div className="w-[45%] flex flex-col gap-7">
            <div className="font-bold text-[56px] text-[#393d46]">
              {product?.title}
            </div>
            <div className="font-normal text-4xl text-[#9f9f9f] border-b-2 pb-6">
              ₹{product?.price}
            </div>
            <div className="font-normal text-lg text-[#9f9f9f]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              delectus magni corrupti error, eius commodi repellat aspernatur
              dolor quam sequi voluptas animi suscipit assumenda. Atque, eaque
              aliquid. Magnam, pariatur molestias. Praesentium perferendis rem,
              ratione illo quia vitae suscipit, error quam modi velit eaque sed,
              qui ad nostrum. Vitae, tempore excepturi?
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-medium text-lg text-[#393d46]">Quantity</div>
              <div className="flex justify-center items-center border border-[#cdcfd1]">
                <button
                  className="bg-[#f6f7fb] w-[48px] h-[48px]"
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <div className="font-medium text-lg text-[#393d46] w-[60px] text-center">
                  {count}
                </div>
                <button
                  className="bg-[#393d46] w-[48px] h-[48px] text-white"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="font-bold text-lg text-white bg-[#393d46] flex w-[245px] justify-center items-center gap-3 py-6"
              onClick={() => {
                setOpen(true);
              }}
            >
              Track <FaCartShopping color="white" />
            </button>
          </div>
        </div>
      </div>
      <Modal title="Test Modal" isOpen={open} onChange={() => {}}>
        <div className="flex flex-col gap-4">
          <input type="text" className="px-3 py-2 rounded-xl outline-none focus:outline-none w-[300px]" />
          <button className="text-white border px-3 py-2">Track</button>
        </div>
      </Modal>
    </>
  );
};

export default Product;
