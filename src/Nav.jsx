import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
    return (
        <div className=" test1 p-[20px] flex justify-between  text-white ">
            <div className=" w-[40px] h-[40px] bg-gradient-to-tr from-pink-400 to-red-500 rounded-full flex justify-center items-center ">
                <p className=" text-2xl font-bold translate-y-[-5%]">D</p>
            </div>
            <div>
                <AiOutlineMenu />
            </div>
        </div>
    );
};

export default Nav;
