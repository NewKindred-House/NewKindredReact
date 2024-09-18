import React, {useEffect} from 'react';
import Banner from '../components/Banner';
import speaker from '../assets/images/speaker_on_orange_bg.png';
import bulb from '../assets/images/bulb_on_sunset.png';
import SwiperComponent from '../components/SwiperComponent';
import { content } from '../assets/data/establishBrandKeysData';
import BlogDiv from '../components/BlogDiv';
import ReadyToWork from '../components/ReadyToWork';

export default function EstablishBrandKeys() {
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
            <Banner section={'Blog'}/>
            {/* The blog summary */}
            <div className="blog-summary py-5 px-5 sm:px-14 lg:px-20">
                {/* The div for the image */}
                <div>
                    <img src={speaker} alt="An orange megaphone speaker on orange background" className="w-full aspect-[1300/431] object-cover object-center"/>
                </div>
            </div>

            {/* The Blog Itself */}
            <div className="px-5 pb-16 sm:pb-30 sm:px-14 lg:px-20 ">
                {/* The blog heading */}
                <div>
                    <h2 className="py-2 font-neuething font-semibold text-xl text-deep_text_color">
                        Establishing a Strong Brand Identity: Key Steps and Considerations
                    </h2>
                    <div className="font-neuething font-normal text-base">
                        <p className="py-2">Brand identity is the cornerstone of any successful business, providing a clear representation of who you are and what you stand for. For businesses, establishing a strong brand identity is crucial for building credibility and standing out in a competitive market.</p>

                        <p className="py-2">
                            In this blog post, we’ll explore the essential steps and considerations for creating a compelling brand identity that resonates with your target audience. Whether you're a startup looking to m 
                        </p>
                    </div>
                    <div className="pt-5">
                        <div>
                            <img loading="lazy" src={bulb} alt="A Bulb with the sunset as its background" className='w-full aspect-[1303/780]'/>
                        </div>
                        
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
                <div className="hidden sm:grid grid-cols-1 gap-14">
                        {
                        content.map(contents => <BlogDiv contents={contents} />)
                        }
                </div>
                {/* Blog Ending */}
                <div className="font-neuething font-regular text-sm leading-6">
                    <p className="text-center py-5 sm:py-10 lg:py-16">
                        By understanding the essence of your brand, assessing current perceptions, defining core values and personality, crafting visual identity elements, developing brand messaging and voice, and implementing brand guidelines, you can create a compelling brand identity that resonates with your audience and sets you apart from the competition. If you're ready to take your brand to the next level, we invite you to explore our other resources and consider consulting with our team of experts. Let's work together to elevate your brand and achieve your business goals.
                    </p>

                    <p className="text-left">
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