import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ image, title, description, tags, liveUrl, githubUrl }) {
    return (

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 transition-shadow overflow-hidden duration-300 hover:-translate-y-0.5 relative">
            <div className='relative overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='w-full overflow-hidden object-cover transition-transform duration-300 hover:scale-110'
                />
            </div>
            <div className='p-6'>
                <h3 className="text-[22px] font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

                <div className='flex flex-wrap gap-2 mb-25 sm:mb-20'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className='bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full'
                        >
                            {tag}
                        </span>
                    ))
                    }
                </div>

                <div className='flex flex-wrap sm:flex-nowrap gap-3 absolute bottom-4 mr-6 mt-4'>
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium text-sm sm:text-base px-3 py-2 justify-center bg-orange-400 rounded-2xl hover:bg-orange-700 border-none shadow-orange-400 shadow-sm hover:translate-y-[-1px]'
                    >
                        Preview <ExternalLink className='w-4 h-4' />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-gray-500 hover:text-gray-700 flex items-center gap-1 font-medium text-sm sm:text-base px-3 py-2 justify-center bg-orange-400 rounded-2xl hover:bg-orange-700 border-none shadow-orange-400 shadow-sm hover:translate-y-[-1px]'
                    >
                        Github <Github className='w-4 h-4' />
                    </a>
                </div>

            </div>
        </div>

    );
}