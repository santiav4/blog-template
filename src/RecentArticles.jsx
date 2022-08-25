import React from "react";

const RecentArticles = ({ article }) => {
    return (
        <div className=" sm:w-[48%] md:w-[46%] lg:w-[30%] lg:mb-[40px]">
            <div>
                <img src={article.image} alt="" />
            </div>
            <div className="pt-[20px] pb-[40px]">
                <p className="text-xs font-bold text-gray-500 pb-[8px]">
                    {article.date}
                </p>
                <h1 className=" text-2xl font-semibold mb-[8px]">
                    {article.title}
                </h1>
                <p className=" font-thin">{article.body}</p>
            </div>
        </div>
    );
};

export default RecentArticles;
