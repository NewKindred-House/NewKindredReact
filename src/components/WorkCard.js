import React from "react";

export default function WorkCard({data}) {
    return (
        <div className="pb-6">
            {/* The Main Image Div */}
            <div className="pb-4">
                <img src={data.imgUrl} alt={`${data.imgAlt}`} className=''/>
            </div>
            {/* The contents */}
            <div className="font-neuething flex flex-col gap-4">
                <h3 className="font-semibold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-primary to-alpino_blue inline-block w-fit text-transparent bg-clip-text">
                    {data.title}
                </h3>
                <p className="font-normal text-base max-w-60 sm:max-w-80">
                    {data.content}
                </p>
                {/* The Tags */}
                <div className="font-neuething font-normal text-xs flex flex-row gap-5">
                    <span className="inline-flex items-center justify-center rounded-md bg-plain_blue px-5 py-3">
                        {data.tags[0]}
                    </span>
                    <span className="inline-flex items-center justify-center rounded-md bg-plain_yellow px-5 py-3">
                        {data.tags[1]}
                    </span>
                </div>
            </div>
        </div>
    )
}