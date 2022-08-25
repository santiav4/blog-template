import React from "react";
import EditorsArticles from "./EditorsArticles";
import { ARTICLES } from "./data";

const Editors = () => {
    const mainArticles = ARTICLES.filter(
        (article) => article.group === "editor"
    )[0];
    let lastArticleIndex = mainArticles.articles.length - 1;

    return (
        <div className=" p-[20px] bg-white md:px-[40px] md:pb-[40px] md:pt-[60px] lg:pb-[60px] ">
            <div className=" mb-[28px] tracking-widest font-semibold text-gray-400">
                EDITORS PICK
            </div>
            <div className=" flex  justify-between flex-wrap lg:flex-nowrap ">
                {mainArticles.articles.map((article, index) => (
                    <EditorsArticles
                        key={article.id}
                        article={article}
                        lastArticleIndex={lastArticleIndex}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Editors;
