import React from "react";

import image1 from "./images/user.jpg";
import TestimonialComments from "./TestimonialComments";

const Testimonials = () => {
    return (
        <div className=" p-[20px] bg-white">
            <h1 className=" mb-[28px] tracking-wider font-semibold text-gray-400">
                TESTIMONIAL
            </h1>
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
            <TestimonialComments image1={image1} />
        </div>
    );
};

export default Testimonials;
