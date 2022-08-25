import React from "react";
import Header from "./Header";

import MainArticles from "./MainArticles";
import { ARTICLES } from "./data";

const Main = () => {
    const mainArticles = ARTICLES.filter(
        (article) => article.group === "main"
    )[0];
    const filteredArticles = mainArticles.articles;

    return (
        // This is the main article has different styling & structure. Must be filtered from articles array
        <div className=" px-5 md:px-[40px]  text-white lg:">
            <Header />
            <div className=" lg:flex lg:flex-wrap lg:flex-col lg:h-[600px]">
                {filteredArticles.map((article, index) =>
                    0 === index ? (
                        <div
                            key={index}
                            className=" md:flex lg:flex-col lg:justify-start md:items-start md:justify-between lg:h-full lg:w-[45%] ">
                            <img
                                className=" md:w-[48%] lg:w-[100%] md:mb-[5%]"
                                src={article.image}
                                alt=""
                            />
                            <div className=" md:w-[48%] lg:w-[100%]">
                                <p className=" pt-[20px] md:pt-0 pb-[10px] text-gray-500 text-xs font-bold">
                                    {article.date}
                                </p>
                                <h1 className="text-2xl font-semibold mb-[16px] ">
                                    {article.title}
                                </h1>
                                <p className="text-gray-500 text-lg mb-[40px]">
                                    {article.body}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="lg:w-[50%]">
                            <MainArticles article={article} index={index} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Main;
