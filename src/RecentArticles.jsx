import React from "react";

const RecentArticles = ({ image1 }) => {
    return (
        <div className="">
            <div>
                <img src={image1} alt="" />
            </div>
            <div className="pt-[20px] pb-[40px]">
                <p className="text-xs font-bold text-gray-500 pb-[8px]">
                    May 08, 2022
                </p>
                <h1 className=" text-2xl font-semibold mb-[8px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className=" font-thin">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, illo modi eum nemo amet alias eaque maiores
                    architecto rem dicta ullam iure pariatur aliquam
                    praesentium, ut magnam totam, cumque excepturi.
                </p>
            </div>
        </div>
    );
};

export default RecentArticles;
