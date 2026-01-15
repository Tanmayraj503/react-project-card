import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ image, title, description, tags, liveUrl, githubUrl }) {
    
    return (

        <div className="bg-[#a093aa27] rounded-3xl shadow-lg border border-gray-600 hover:shadow-2xl hover:shadow-[#10193f] transition- overflow-hidden duration-500  hover:-translate-y-1 relative flex flex-col mb-5">
            <div className='relative overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='w-full overflow-hidden h-48 object-cover transition-transform duration-300 hover:scale-110'
                />
            </div>
            <div className='p-6'>
                <h3 className="text-[22px] font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 font-semibold line-clamp-3">{description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-[12px] font-medium px-2 py-1 rounded-full
                    bg-[#10101d] text-gray-200 border border-gray-700`}
                        >
                            {tag}
                        </span>
                    ))
                    }
                </div>

                <div className='flex flex-wrap sm:flex-nowrap gap-3 mt-auto pt-2   mr-6 '>
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white flex items-center gap-1 font-medium text-sm sm:text-base px-4 py-2 justify-center bg-orange-400 rounded-xl hover:bg-orange-700 border-none shadow-orange-400 shadow-sm'
                    >
                        Live <ExternalLink className='w-4 h-4' />
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white flex items-center gap-1 font-medium text-sm sm:text-base px-4 py-2 justify-center bg-gray-900 rounded-xl hover:bg-gray-700 border-none shadow-gray-400 shadow-sm transition-all '
                    >
                        Github <Github className='w-4 h-4' />
                    </a>
                </div>

            </div>
        </div>

    );
}