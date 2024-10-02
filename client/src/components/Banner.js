import React from 'react';

export default function Banner({section}) {
    return (
        <div className='bg-banner_bg flex items-center justify-between pad1 min-h-[362px]'>
                <div>
                    <h3 className='rounded-[8px] border-[0.8px] border-primary p-[10px]'>
                        {section}
                    </h3>
                </div>

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