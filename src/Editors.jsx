import React from "react";
import image1 from "./images/latest.jpg";

const Editors = () => {
    return (
        <div className=" p-[20px] bg-white">
            <div>EDITORS PICK</div>
            <div className=" flex justify-between flex-wrap ">
                <div className=" flex flex-col w-[48%]  ">
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <p>January 11, 2022</p>
                    <h1 className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </div>
                <div className=" flex flex-col w-[48%] ">
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <p>January 11, 2022</p>
                    <h1 className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </div>
                <div className=" flex flex-col w-[48%] ">
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <p>January 11, 2022</p>
                    <h1 className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </div>
                <div className=" flex flex-col w-[48%] ">
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <p>January 11, 2022</p>
                    <h1 className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Editors;
