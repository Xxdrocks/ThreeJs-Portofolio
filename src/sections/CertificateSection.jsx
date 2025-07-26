import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { certificates } from "../constants";


const CertificateSection = () => {
  return (
    <section className="w-full px-7 py-8 ">
      <div className="w-full h-full md:px-20 px-5 py-15">
        <TitleHeader title="My Certificate" sub={"Certification"}/>
      </div>
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {certificates.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="md:w-auto max-w-[300px] bg-[#1e1e2f] rounded-xl p-6 flex-shrink-0 shadow-md"
          >
            <div className="md:w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-white mb-4">
              <img
                src={imgPath}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="text-shadow-white-50 text-sm mt-2 w-">{desc}</p>
          </div>
        ))}
      </div>
    </section>

  )
}

export default CertificateSection
