import React from "react";
import image1 from "./images/latest.jpg";
import RecentArticles from "./RecentArticles";
const Recent = () => {
    return (
        //This are six articles
        <div className=" p-[20px] text-white">
            <h1 className=" pb-[28px] tracking-widest font-semibold text-gray-500">
                {" "}
                RECENT ARTICLES
            </h1>
            <RecentArticles image1={image1} />
            <RecentArticles image1={image1} />
            <RecentArticles image1={image1} />
            <RecentArticles image1={image1} />
            <RecentArticles image1={image1} />
            <RecentArticles image1={image1} />
        </div>
    );
};

export default Recent;
