import React from 'react';
import arrowIcon from '../assets/images/arrow-right.png'

export default function ReadyToWork() {
    return (
        <div className='bg-banner_bg flex flex-col pad1 lg:py-24 py-20 font-neuething min-h-[362px]'>
           <div className='flex flex-col gap-6'>
            <h3 className='font-medium text-3xl sm:text-6xl phone:text-[48px] leading-[56px] sm:leading-[112px] text-deep_text_color'> Ready to work?</h3>
            <button className='btn btn-outline !border-primary !text-primary w-fit hover:bg-transparent font-normal text-base'>
                <span>Start a Project</span>
                <span>
                    {/* An arrow from */}
                    <img src={arrowIcon} width={25} height={25} alt='A right faciing arrow icon' />
                </span>
            </button>
           </div>
        </div>
    )
}