"use client";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <header
      className={
        !showForm
          ? "w-screen flex flex-col justify-center h-[80px] items-center border"
          : "w-screen flex flex-col justify-center h-[160px] items-center border"
      }
    >
      <nav className="w-[90%] flex justify-between items-center">
        <div className="md:hidden">
          <FaBars />
        </div>
        <div className="font-bold text-2xl text-[#393d46]">ScrapeYard</div>
        <div className="hidden items-center gap-8 mx-8 lg:flex">
          <span className="text-[#393d46] font-normal text-lg">Categories</span>
          <span className="text-[#393d46] font-normal text-lg">
            New Arrivals
          </span>
          <span className="text-[#393d46] font-normal text-lg">Features</span>
          <span className="text-[#393d46] font-normal text-lg">
            Collections
          </span>
        </div>
        <div className="hidden md:flex justify-center items-center cursor-pointer">
          <div
            className="mx-4"
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            <FaSearch />
          </div>
          <div className="mx-4">
            <FaCartShopping />
          </div>
          <button className="bg-[#393d46] px-5 py-3 text-white font-bold text-sm mx-4 rounded-lg">
            Login
          </button>
        </div>
      </nav>
      <div className={showForm ? "flex justify-center w-full" : "hidden"}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Paste Product Link"
          className="border-2 border-[#393d46] px-4 py-2 w-[50%] outline-none rounded-xl"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (search) {
                setShowForm(false);
                router.push(`/product?link=${search}`);
              } else {
                alert("Please enter a valid link");
              }
            }
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
