import React from "react";

const TestimonialComments = ({ image1 }) => {
    return (
        <div className=" flex items-start py-[24px] border-b-[1px]">
            <img
                className=" rounded-full mr-[12px]"
                src={image1}
                width="36"
                height="36"
                alt=""
            />

            <div>
                <p className=" font-thin tracking-wide">
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Qui maxime expedita dolores eius ad recusandae beatae porro
                    repudiandae adipisci veniam fuga ipsa hic"
                </p>
                <p className=" mt-[6px] font-semibold">@userdefault1</p>
            </div>
        </div>
    );
};

export default TestimonialComments;
