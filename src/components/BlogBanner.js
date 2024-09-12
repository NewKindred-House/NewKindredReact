import React from 'react';

export default function BlogBanner() {
    return (
        <div className='bg-banner_bg backdrop-opacity-[23%] flex justify-between px-5 lg:py-24 sm:py-20 py-16 sm:px-14 lg:px-20'>
                <h3 className='btn btn-outline border-primary hover:bg-transparent hover:text-black font-neuething font-normal text-lg lg:text-xl'>
                    Blog
                </h3>

                <div>
                    <h1 className='font-neuething font-medium text-2xl sm:text-3xl lg:text-6xl text-deep_text_color'>
                        NewKindred.
                    </h1>
                    <p className='hidden lg:block font-neuething font-normal text-base tracking-[0.5]'>
                     We partner with businesses to build great brands,<br/>
                     develop great products, create stories for themselves,<br/> 
                     and shape their brand experiences.

                    </p>
                </div>
        </div>
    )
}