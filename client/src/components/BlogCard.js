import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function BlogCard(props) {
    const navigate = useNavigate();
    const {img, altText, title, url} = props.data
    return (
        <Link 
            className='card card-compact w-full shadow-gray1 shadow-sm'
            to={`${url}`}
        >
            <div className='w-full '>
                <img alt={altText} src={img} className='w-full aspect-[400/300] sm:aspect-[400/350] object-cover object-top'></img>
            </div>
            <p className='card-title p-5 font-neuething font-medium text-sm'>
                {title}
            </p>
        </Link>
    )
}