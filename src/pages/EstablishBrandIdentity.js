import React from 'react';
import Banner from '../components/Banner';
import ReadyToWork from '../components/ReadyToWork';

import brandIdentityLg from '../assets/images/blog-brand_identity-lg.png';
import brandIdentitySm from '../assets/images/blog-brand_identity-sm.png';
import brandIdentityXs from '../assets/images/blog-brand_identity-xs.png';
import blogPerception from '../assets/images/blog-perception.png';

import { content } from '../assets/data/brandIdentityData';
import SwiperComponent2ps from '../components/SwiperComponent2ps';
import BlogDiv2ps from '../components/BlogDiv2ps'


export default function EstablishBrandIdentity() {
    return (
        <div className="text-text_color">
            <Banner section={'Blog'}/>
            {/* The blog summary */}
            <div className="blog-summary py-5 px-5 sm:px-14 lg:px-20">
                {/* The div for the image */}
                <div className='w-full'>
                    <picture className='w-full'>
                        {/* For desktop */}
                        <source srcset={brandIdentityLg} />
                        {/* For Tablet */}
                        <source srcset={brandIdentitySm} media="(max-width: 1024px)" />
                        {/* For Mobile */}
                        <source srcset={brandIdentityXs} media="(max-width: 450px)" />
                        {/* Incase the picture element is not supported by the browser, we provide a fallback */}
                        <img src={brandIdentityLg} alt="A depiction of brand identity" className="w-full hidden lg:block lg:aspect-[1293/942] object-cover object-left"/>
                        <img src={brandIdentitySm} alt="A depiction of brand identity" className="w-full hidden sm:block lg:hidden object-contain object-left"/>
                        <img src={brandIdentityXs} alt="A depiction of brand identity" className="w-full sm:hidden object-contain object-[10%_100%]"/>
                    </picture>
                </div>
            </div>

            {/* The Blog Itself */}
            <div className="px-5 pb-16 sm:pb-30 sm:px-14 lg:px-20 ">
                {/* The blog heading */}
                <div>
                    <div className="font-neuething font-normal text-base">
                        <div className='py-2'>
                            <h2 className="font-neuething font-medium text-xl text-deep_text_color inline">Brand Identity</h2>
                            &nbsp;
                            <p className="inline">is the cornerstone of any successful business, providing a clear representation of who you are and what you stand for.</p>
                        </div>

                        <p className="py-2">
                            For businesses, establishing a strong brand identity is crucial for building credibility and standing out in a competitive market.
                        </p>
                        <p className='py-2'>
                            In this blog post, we’ll explore the essential steps and considerations for creating a compelling brand identity that resonates with your target audience. Whether you’re a startup looking to make your mark or an established business seeking to refresh your image, understanding the fundamentals of brand identity is key to your success.
                        </p>
                    </div>
                    <div className="pt-5">
                        <div className='font-neuething py-8'>
                            <h3 className='font-medium text-xl text-deep_text_color'>
                                Understanding Your Brand’s Essence
                            </h3>
                            <p className='font-normal text-sm leading-6 py-2'>
                                To truly harness the power of your brand’s identity, it’s essential to grasp its fundamental essence. In the world of business, brand identity goes beyond mere visuals; it encapsulates the very soul of your business. It’s about the values you uphold, the promises you make, and the experiences you deliver.
                            </p>
                            <p className='font-normal text-sm leading-6 py-2'>
                                Your brand identity serves as the guiding beacon that aligns your actions with your aspirations. By understanding the essence of your brand, you lay the groundwork for building meaningful connections with your audience and carving out your unique place in the market.
                            </p>
                        </div>

                        <div className='pb-8'>
                            <img loading="lazy" src={blogPerception} alt="Two avatars depicting brand perception" className='w-full aspect-[305/268] sm:aspect-[885/780] lg:aspect-[1303/780] object-cover'/>
                        </div>
                    </div>
                </div>
                {/* The Blog Contents */}
                {/* The Blog content for mobile */}
                <div className="sm:hidden p-5">
                    <SwiperComponent2ps data={content}/>
                </div>
                {/* The Blog content for large screens */}
                <div className="hidden sm:grid grid-cols-1 gap-14">
                    {
                    content.map(contents => <BlogDiv2ps contents={contents} />)
                    }
                </div>
                {/* Blog Ending */}
                <div className="font-neuething font-regular text-sm leading-6">
                    <p className="text-center py-5 sm:py-10 lg:py-16">
                        By understanding the essence of your brand, assessing current perceptions, defining core values and personality, crafting visual identity elements, developing brand messaging and voice, and implementing brand guidelines, you can create a compelling brand identity that resonates with your audience and sets you apart from the competition. If you’re ready to take your brand to the next level, we invite you to explore our other resources and consider consulting with our team of experts. Let’s work together to elevate your brand and achieve your business goals.
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