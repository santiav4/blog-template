import React from "react";

const MainArticles = ({ article, index }) => {
    return (
        <div
            className={`flex justify-between md:justify-end md:flex-row-reverse ${
                index === 1
                    ? "border-t-[1px] lg:border-0 lg:pt-0"
                    : "lg:pt-[32px] "
            } border-t-[1px] border-gray-500 pt-[24px]  pb-[32px]`}>
            <div className="w-[50%] md:pl-[24px] md:w-[80%]">
                <p className="  pb-[10px] text-gray-500 text-xs font-bold">
                    {article.date}
                </p>
                <h1 className=" text-xl lg:text-2xl font-semibold">
                    {article.title}
                </h1>
            </div>
            <div className=" w-[50%] md:w-[20%] lg:w-[50%] flex flex-col justify-start  items-end md:items-start">
                <div className=" w-[100%] ">
                    <img className=" h-full" src={article.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MainArticles;
