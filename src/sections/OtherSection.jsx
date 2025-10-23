import React from 'react'
import { other } from '../constants'
import TitleHeader from '../components/TitleHeader'

const OtherSection = () => {
    return (
        <div className='px-7'>
            <div className="w-full h-full md:px-20 px-5 py-15">
                <TitleHeader sub={"Others"} title="Dokumentation" />
            </div>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                {other.map(({ imgPath, title, desc }) => (
                    <div
                        key={title}
                        className="md:w-auto max-w-[300px] bg-[#1e1e2f] rounded-xl p-6 flex-shrink-0 shadow-md"
                    >
                        <div className="md:w-full h-auto flex items-center justify-center overflow-hidden rounded-lg bg-white mb-4">
                            <img
                                src={imgPath}
                                alt={title}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{title}</h3>
                        <p className="text-shadow-white-50 text-sm mt-2 ">{desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OtherSection
