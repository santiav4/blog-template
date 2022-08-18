import React from "react";
import Nav from "./Nav";
import image1 from "./images/latest.jpg";

const Main = () => {
    return (
        // This is the main article has different styling & structure. Must be filtered from articles array
        <div className=" px-5 bg-white border-t-2 border-orange-500">
            <div>
                <img src={image1} alt="" />
                <p>May 05, 2022</p>
                <h1>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sunt nulla perferendis suscipit soluta quidem
                    libero totam maiores aliquam voluptate vero.
                </p>
            </div>

            <div className=" flex justify-between border-t-2 border-orange-500 py-5 ">
                <div className="w-[50%]">
                    <p>May 05, 2022</p>
                    <h1 className=" text-2xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                </div>
                <div className=" w-[50%]">
                    <div className="">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
            <div className=" flex justify-between border-t-2 border-orange-500 py-5 ">
                <div className="w-[50%]">
                    <p>May 05, 2022</p>
                    <h1 className=" text-2xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                </div>
                <div className=" w-[50%]">
                    <div className="">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
            <div className=" flex justify-between border-t-2 border-orange-500 py-5 ">
                <div className="w-[50%]">
                    <p>May 05, 2022</p>
                    <h1 className=" text-2xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                </div>
                <div className=" w-[50%]">
                    <div className="">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
