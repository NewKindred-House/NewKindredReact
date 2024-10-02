import React from 'react';
import Banner from '../components/Banner';
import ReadyToWork from '../components/ReadyToWork';
import { content } from '../assets/data/workData';
import WorkCard from '../components/WorkCard';

export default function Work() {
    const contents = content.map(data => <WorkCard key={data.title} data={data}/>)
    return (
        <div className='text-deep_text_color flex flex-col'>
            <Banner section={'Featured work'} />
            <div className='flex flex-col gap-8 mt-12 mb-12 pad1'>
                {contents}
            </div>
            <ReadyToWork />
        </div>
    )
}