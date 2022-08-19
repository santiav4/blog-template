import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import image1 from "./images/latest.jpg";
import MainArticles from "./MainArticles";

const Main = () => {
    return (
        // This is the main article has different styling & structure. Must be filtered from articles array
        <div className=" px-5   text-white">
            <Header />
            <div>
                <img src={image1} alt="" />
                <p className=" pt-[20px] pb-[10px] text-gray-500 text-xs font-bold">
                    May 05, 2022
                </p>
                <h1 className="text-2xl font-semibold mb-[16px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="text-gray-500 text-lg mb-[40px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sunt nulla perferendis suscipit soluta quidem
                    libero totam maiores aliquam voluptate vero.
                </p>
            </div>
            <MainArticles image1={image1} />
            <MainArticles image1={image1} />
            <MainArticles image1={image1} />
        </div>
    );
};

export default Main;
