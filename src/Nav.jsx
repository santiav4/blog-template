import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
    return (
        <div className=" p-[20px] flex justify-between bg-white ">
            <div>logo</div>
            <div>
                <AiOutlineMenu />
            </div>
        </div>
    );
};

export default Nav;
