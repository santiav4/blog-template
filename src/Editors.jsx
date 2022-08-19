import React from "react";
import EditorsArticles from "./EditorsArticles";
import image1 from "./images/latest.jpg";

const Editors = () => {
    return (
        <div className=" p-[20px] bg-white">
            <div className=" mb-[28px] tracking-widest font-semibold text-gray-400">
                EDITORS PICK
            </div>
            <div className=" flex justify-between flex-wrap ">
                <EditorsArticles image1={image1} />
                <EditorsArticles image1={image1} />
                <EditorsArticles image1={image1} />
                <EditorsArticles image1={image1} />
                <EditorsArticles image1={image1} />
                <EditorsArticles image1={image1} />
            </div>
        </div>
    );
};

export default Editors;
