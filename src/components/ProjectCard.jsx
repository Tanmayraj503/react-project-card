import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ image, title, description, tags, liveUrl, githubUrl }) {
    const tagColors = [
        "bg-blue-100 text-blue-800",
        "bg-green-100 text-green-800",
        "bg-purple-100 text-purple-800",
        "bg-pink-100 text-pink-800",
        "bg-yellow-100 text-yellow-800",
        "bg-orange-100 text-orange-800",
    ];
    return (

        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200 transition-shadow overflow-hidden duration-300  hover:-translate-y-1 relative flex flex-col">
            <div className='relative overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='w-full overflow-hidden h-48 object-cover transition-transform duration-300 hover:scale-110'
                />
            </div>
            <div className='p-6'>
                <h3 className="text-[22px] font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`text-sm font-medium px-3 py-1 rounded-full
                    ${tagColors[index % tagColors.length]}`}
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