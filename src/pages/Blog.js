import React from 'react';
import BlogBanner from '../components/BlogBanner';
import { blogBoxData } from '../assets/data/blogBoxData';
import BlogCard from '../components/BlogCard';
import ReadyToWork from '../components/ReadyToWork';

export default function Blog() {

    const blogs = blogBoxData.map(data => <BlogCard key={data.altText} data={data} />)

    return (
        <div className=''>
            
            {/* This is the banner */}
            <BlogBanner />

            {/* This is the blog posts */}
            <div className='blog-posts py-5 sm:px-16 px-5 grid gap-8 lg:gap-11 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {blogs}
            </div>
            {/* This is the ready to work div */}
            <ReadyToWork />
        </div>
    )
}