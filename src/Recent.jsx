import React from "react";

import RecentArticles from "./RecentArticles";

import { ARTICLES } from "./data";
const Recent = () => {
    const mainArticles = ARTICLES.filter(
        (article) => article.group === "recent"
    )[0];
    return (
        //This are six articles
        <div className=" p-[20px] text-white md:px-[40px] md:pb-[40px] md:pt-[60px]">
            <h1 className=" pb-[28px] md:mb-[40px] md:pb-0 tracking-widest font-semibold text-gray-500">
                RECENT ARTICLES
            </h1>
            <div className="sm:flex sm:flex-wrap sm:justify-between">
                {mainArticles.articles.map((article) => (
                    <RecentArticles key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default Recent;
