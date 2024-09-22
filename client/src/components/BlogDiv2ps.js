import React from 'react';

export default function BlogDiv2ps({contents}) {
    //This is a reusable component that has only one heading and two pargraphs
    return (
        <div className='font-neuething pt-2'>
            <h3 className='font-medium text-xl text-deep_text_color'>{contents.title}</h3>
            <p className='font-normal text-sm leading-6 py-2'>
                {contents.content}
            </ p>
            <p className='font-normal text-sm leading-6 py-2'>
                {contents.content2}
            </ p>
        </div>
    )
}