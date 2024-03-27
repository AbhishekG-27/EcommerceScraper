import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#393d46] w-full">
      <div className="flex justify-evenly w-full my-12 items-start">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="font-bold text-2xl text-white">
            Join our Newsletter
          </div>
          <div className="font-normal text-lg text-white">
            Drop your email below to get update about us, lastest news, tips,
            and more!
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-3 px-4 w-full text-white bg-transparent border border-white outline-none"
            />
            <button className="ml-[-25px]">
              <FaArrowRight color="white" size={16} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-5">
            <div className="flex gap-3 text-white">
              <FaRegMessage color="white" size={24} />
              <span>gargabhishek1255@gmail.com</span>
            </div>
            <div className="flex gap-3 text-white">
              <FaPhone color="white" size={24} />
              <span>+91 7015854119</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="font-bold text-2xl text-white">Product Links</div>
          <div className="font-normal text-lg text-white">Categories</div>
          <div className="font-normal text-lg text-white">New Arrival</div>
          <div className="font-normal text-lg text-white">Features</div>
          <div className="font-normal text-lg text-white">Collections</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="font-bold text-2xl text-white">Company</div>
          <div className="font-normal text-lg text-white">About</div>
          <div className="font-normal text-lg text-white">Blog</div>
          <div className="font-normal text-lg text-white">Careers</div>
          <div className="font-normal text-lg text-white">Contact</div>
          <div className="font-normal text-lg text-white">Services</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="font-bold text-2xl text-white">Support</div>
          <div className="font-normal text-lg text-white">Support Center</div>
          <div className="font-normal text-lg text-white">FAQ</div>
          <div className="font-normal text-lg text-white">Privacy Policy</div>
          <div className="font-normal text-lg text-white">
            Terms of Services
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl text-white">Get in Touch</div>
          <div className="flex justify-evenly my-5">
            <FaInstagram className="text-white text-3xl" />
            <FaSquareTwitter className="text-white text-3xl" />
            <FaFacebook className="text-white text-3xl" />
          </div>
        </div>
      </div>
      <div className="text-white font-normal text-sm mb-12">
        Copyright © 2021 ScrapeYard. All Right Reseved
      </div>
    </div>
  );
};

export default Footer;
