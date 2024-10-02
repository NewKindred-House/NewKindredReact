import React from 'react';
import Banner from '../components/Banner';
import { blogBoxData } from '../assets/data/blogBoxData';
import BlogCard from '../components/BlogCard';
import ReadyToWork from '../components/ReadyToWork';

export default function Blog() {

    const blogs = blogBoxData.map(data => <BlogCard key={data.altText} data={data} />)

    return (
        <div className='flex flex-col'>
            
            {/* This is the banner */}
            <Banner section={'Blog'} />

            {/* This is the blog posts */}
            <div className='blog-posts mt-12 mb-12 pad1 grid gap-8 lg:gap-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {blogs}
            </div>
            {/* This is the ready to work div */}
            <ReadyToWork />
        </div>
    )
}