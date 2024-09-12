import React from 'react';

export default function BlogDiv({contents}) {

    return (
        <div className='font-neuething'>
            <h3 className='font-medium text-xl text-deep_text_color'>{contents.title}</h3>
            <p className='font-normal text-sm leading-6'>
                {contents.content}
            </p>
        </div>
    )
}