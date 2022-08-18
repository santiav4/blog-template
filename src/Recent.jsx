import React from "react";
import image1 from "./images/latest.jpg";
const Recent = () => {
    return (
        //This are six articles
        <div className=" p-[20px] bg-white">
            <h1> RECENT ARTICLES</h1>
            <div>
                <div>
                    <img src={image1} alt="" />
                </div>
                <p>May 08, 2022</p>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, illo modi eum nemo amet alias eaque maiores
                    architecto rem dicta ullam iure pariatur aliquam
                    praesentium, ut magnam totam, cumque excepturi.
                </p>
            </div>
            <div>
                <div>
                    <img src={image1} alt="" />
                </div>
                <p>May 08, 2022</p>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, illo modi eum nemo amet alias eaque maiores
                    architecto rem dicta ullam iure pariatur aliquam
                    praesentium, ut magnam totam, cumque excepturi.
                </p>
            </div>
            <div>
                <div>
                    <img src={image1} alt="" />
                </div>
                <p>May 08, 2022</p>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Assumenda, illo modi eum nemo amet alias eaque maiores
                    architecto rem dicta ullam iure pariatur aliquam
                    praesentium, ut magnam totam, cumque excepturi.
                </p>
            </div>
        </div>
    );
};

export default Recent;
