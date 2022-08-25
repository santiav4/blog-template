import React from "react";

const EditorsArticles = ({ article, lastArticleIndex, index }) => {
    return (
        <div
            className={`flex  flex-col lg:justify-between w-[48%]  lg:w-[25%] lg:px-[3%] ${
                lastArticleIndex === index ? "" : "lg:border-r-[1px]"
            }  pb-[40px] lg:pb-0`}>
            <div>
                <div>
                    <img src={article.image} alt="" />
                </div>
            </div>

            <p className="text-xs text-gray-500 pt-[16px] pb-[10px]">
                {article.date}
            </p>
            <h1 className="text-xl font-semibold">{article.title}</h1>
            <p className="hidden md:block pt-[14px] text-gray-400">
                {article.body}
            </p>
        </div>
    );
};

export default EditorsArticles;
