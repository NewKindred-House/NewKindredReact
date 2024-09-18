import React from 'react';
import Banner from '../components/Banner';
import ReadyToWork from '../components/ReadyToWork';
import { content } from '../assets/data/workData';
import WorkCard from '../components/WorkCard';

export default function Work() {
    const contents = content.map(data => <WorkCard key={data.title} data={data}/>)
    return (
        <div className='text-deep_text_color'>
            <Banner section={'Featured work'} />
            <div className='flex flex-col gap-8 py-5 sm:py-8 px-5 sm:px-14 lg:px-20'>
                {contents}
            </div>
            <ReadyToWork />
        </div>
    )
}