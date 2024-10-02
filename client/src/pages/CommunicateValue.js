import React, {useEffect} from 'react';
import Banner from '../components/Banner';
import SwiperComponent from '../components/SwiperComponent';
import ReadyToWork from '../components/ReadyToWork';
import Dart from '../assets/images/blog-dart_picture.png';
import StoneStack from '../assets/images/blog-stone_stack_picture.png';
import { strategy, reason } from '../assets/data/communicateValueData';
import BlogDiv from '../components/BlogDiv';

export default function CommunicateValue() {
    useEffect(() => {
        //We use this useEffect to scroll back up
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [])
    return (
        <div className="text-text_color flex flex-col">
            <Banner section={'Blog'}/>
            {/* The blog summary */}
            <div className="blog-summary mt-12 mb-12 pad1">
                {/* The div for the image */}
                <div>
                    <img src={Dart} alt="A Dart board" className="w-full aspect-[1300/431] object-cover object-center"/>
                </div>
            </div>

            {/* The Blog Itself */}
            <div className="px-5 pb-16 sm:pb-30 sm:px-14 lg:px-20 ">
                {/* The blog heading */}
                <div>
                    <h2 className="py-2 font-neuething font-semibold text-xl text-deep_text_color">
                        Communicating Value in the SaaS Industry: Branding Strategies for Small and Medium-Sized B2B Brands
                    </h2>
                    <div className="font-neuething font-normal text-base">
                        <p className="py-2">
                            In the SaaS Industry, small and medium-sized businesses (SMBs) often struggle to stand out. With the market flooded with similar solutions and products vying for the same market share. it is crucial for small and medium-sized businesses (SMBs) to develop effective branding strategies that clearly communicate their value to potential customers.  
                        </p>

                        <p className="py-2">
                            In this article, we will explore the importance of communicating value in the SaaS industry and provide actionable branding strategies for small and medium-sized B2B brands
                        </p>
                    </div>
                    <div className="pt-5">
                        <div>
                            <img loading="lazy" src={StoneStack} alt="A Stack of flat stones" className='w-full aspect-[1303/780]'/>
                        </div>

                        <div className='font-neuething py-8'>
                            <h3 className='font-medium text-xl text-deep_text_color'>
                                Why Does Communicating Value Matters in the SaaS Industry
                            </h3>
                            <p className='font-normal text-sm leading-6'>
                                Communicating value is critical because it helps businesses differentiate themselves from competitors and establish trust with potential customers or target audience.  When a business clearly communicates its value, it can:
                            </p>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-10'>
                            {
                                reason.map(contents => <BlogDiv contents={contents} />)
                            }
                        </div>
                    </div>
                </div>
                {/* The Blog Contents */}
                <div className=''>
                    <div className='font-neuething py-8'>
                        <h3 className='font-medium text-xl text-deep_text_color'>
                            Branding Strategies for Communicating Value in the SaaS Industry
                        </h3>
                        <p className='font-normal text-sm leading-6'>
                            To effectively communicate value,  small and medium-sized B2B brands should focus on these following strategies:
                        </ p>
                    </div>
                    {/* The Blog content for mobile */}
                    <div className="sm:hidden p-5">
                        <SwiperComponent data={strategy}/>
                    </div>
                    {/* The Blog content for large screens */}
                    <div className="hidden sm:grid grid-cols-1 gap-14">
                            {
                            strategy.map(contents => <BlogDiv contents={contents} />)
                            }
                    </div>
                </div>
                {/* Blog Ending */}
                <div className="font-neuething font-regular text-sm leading-6">
                    <p className="text-center py-5 sm:py-10 lg:py-16">
                        Communicating value is critical for every business, for both small and medium-sized B2B brands.  And to communicate that value we need to be different, to be unique. By effectively communicating your value through these methods you establish  trust with your potential customers.
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