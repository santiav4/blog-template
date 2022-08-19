import React from "react";

const EditorsArticles = ({ image1 }) => {
    return (
        <div className=" flex flex-col w-[48%] pb-[40px]  ">
            <div>
                <div>
                    <img src={image1} alt="" />
                </div>
            </div>

            <p className="text-xs text-gray-500 pt-[16px] pb-[10px]">
                January 11, 2022
            </p>
            <h1 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
        </div>
    );
};

export default EditorsArticles;
