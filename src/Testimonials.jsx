import React from "react";

import TestimonialComments from "./TestimonialComments";
import { ARTICLES } from "./data";

const Testimonials = () => {
    const mainArticles = ARTICLES.filter(
        (article) => article.group === "testimonial"
    )[0];
    const lastItem = mainArticles.testimonials.length - 1;

    return (
        <div className=" p-[20px] bg-white md:px-[40px] md:pb-[40px] md:pt-[60px]">
            <h1 className=" mb-[28px] md:mb-[60px] tracking-wider font-semibold text-gray-400">
                TESTIMONIAL
            </h1>
            {mainArticles.testimonials.map((testimonial, index) => (
                <TestimonialComments
                    key={testimonial.id}
                    testimonial={testimonial}
                    lastItem={lastItem}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Testimonials;
