import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const pages = ["Learn", "Blog", "Bookmarks", "UI KIT", "FAQ"];
const socials = [<BsTwitter />, <BsInstagram />, <BsDribbble />, <BsMedium />];

const Nav = () => {
    return (
        <div className=" test1 md:h-[150px] p-[20px] md:px-[40px] flex justify-between  items-center  text-white ">
            <div className=" w-[40px] h-[40px] lg:mr-[40px] bg-gradient-to-tr from-pink-400 to-red-500 rounded-full flex justify-center items-center hover:cursor-pointer">
                <p className=" text-2xl font-bold translate-y-[-5%] ">D</p>
            </div>
            <div className="flex items-center lg:hidden">
                <AiOutlineMenu size={20} />
            </div>
            <div className=" hidden lg:flex ">
                {pages.map((page) => (
                    <div className=" mr-[40px] font-bold text-gray-500  hover:text-white hover:cursor-pointer ease-in-out duration-300">
                        {page}
                    </div>
                ))}
            </div>
            <div className=" hidden lg:flex lg:w-[20%] lg:justify-between font-bold text-gray-500 hover:cursor-pointer">
                {socials.map((social) => (
                    <div className=" hover:text-white ease-in-out duration-300">
                        {social}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav;
