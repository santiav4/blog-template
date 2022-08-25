import React from "react";

const TestimonialComments = ({ testimonial, lastItem, index }) => {
    return (
        <div
            className={`flex items-start py-[24px] md:pl-[20px] ${
                lastItem === index ? "" : "border-b-[1px]"
            }  border-l-[1px]`}>
            <img
                className=" rounded-full mr-[12px]"
                src={testimonial.image}
                width="36"
                height="36"
                alt=""
            />

            <div>
                <p className=" font-thin tracking-wide">
                    {testimonial.comment}
                </p>
                <p className=" mt-[6px] font-semibold">{testimonial.tag}</p>
            </div>
        </div>
    );
};

export default TestimonialComments;
