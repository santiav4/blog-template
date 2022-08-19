import React from "react";

const MainArticles = ({ image1 }) => {
    return (
        <div className=" flex justify-between border-t-[1px] border-gray-500 pt-[24px] pb-[32px] ">
            <div className="w-[50%]">
                <p className="  pb-[10px] text-gray-500 text-xs font-bold">
                    May 05, 2022
                </p>
                <h1 className=" text-xl font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>
            <div className=" w-[50%] flex flex-col justify-start  items-end">
                <div className=" h-[70%]">
                    <img className=" h-full" src={image1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainArticles;
