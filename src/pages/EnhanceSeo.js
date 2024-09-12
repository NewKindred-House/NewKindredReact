import React, {useEffect} from "react";
import BlogBanner from "../components/BlogBanner";
import enhanceSeoImg from "../assets/images/blog-enhance_seo-lg.png"
import seoImg from "../assets/images/blog-seo.png"
import ReadyToWork from "../components/ReadyToWork";
import { content } from "../assets/data/enhanceSeoContentData"
import SwiperComponent from "../components/SwiperComponent";
import BlogDiv from "../components/BlogDiv";

export default function EnhanceSeo() {
    useEffect(() => {
        //We use this useEffect to scroll back up
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <div className="text-text_color">
            <BlogBanner />
            {/* The blog summary */}
            <div className="blog-summary py-5 px-5 sm:px-14 lg:px-20">
                {/* The div for the image */}
                <div>
                    <img src={enhanceSeoImg} alt="Enhance SEO" className="w-full aspect-[1300/431] object-cover object-center"/>
                </div>
                <p className="pt-5 font-neuething font-normal text-base">
                    Imagine your business is a stall in the market, a lot of vendors like you are also vying for the same attention of the passing customers. Your stall is there, filled with amazing products, but no one seems to notice you. Frustrating, isn't it? 
                </p>
            </div>
            {/* The Blog Itself */}
            <div className="px-5 pb-16 sm:pb-30 sm:px-14 lg:px-20 ">
                {/* The blog heading */}
                <div>
                    <h2 className="py-2 font-neuething font-semibold text-xl text-deep_text_color">The Power of SEO</h2>
                    <div className="font-neuething font-normal text-base">
                        <p className="py-2">To really compete in business, you need a strong SEO strategy to stand out where attention is hard to get. With so many businesses competing for the same customers, search engine optimization (SEO) is a key way to increase your online visibility. Think of SEO as what gets your website on Google's first page. </p>
                        <p className="py-2">As a beacon, something that makes people turn their heads and say, "That's exactly what I've been looking for!”, when people search for products or services like yours. 
                        </p>
                    </div>
                    <div className="pt-5">
                        <img src={seoImg} alt="An SEO link" />
                        <p className="py-8 font-neuething font-normal text-sm">
                        That's why you need a solid SEO strategy to boost your visibility, attract more visitors, and help your business grow.In this blog post, we'll cover 8 important Local SEO strategies to help your business get noticed online and drive more traffic to your website.
                        </p>
                    </div>
                </div>
                {/* The Blog Contents */}
                {/* The Blog content for mobile */}
                <div className="sm:hidden p-5">
                    <SwiperComponent data={content}/>
                </div>
                {/* The Blog content for large screens */}
                <div className="hidden sm:grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-2 ">
                     {
                        content.map(contents => <BlogDiv contents={contents} />)
                     }
                </div>
                {/* Blog Ending */}
                <div className="font-neuething font-regular">
                    <p className="text-center py-5 sm:py-10 lg:py-16 text-base">Now it depends on, how much do we want to stand out against our fellow competitors in the market on a scale of 1-10?</p>

                    <p className="text-left text-sm leading-6">
                        Curated and co-authored by Prince 
                        <br/>
                        Nwagboso (Lead Strategist, NewKindred) and 
                        <br/>
                        Dubem Eric (Content Writer, NewKindred)
                    </p>
                </div>
            </div>
            

            {/* The Ready to work section */}
            <ReadyToWork />
        </div>
    )
}