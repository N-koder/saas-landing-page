import React from 'react'
import { links, logos } from '../constants/index'
import Marker from '../Components/Marker'
import { Element } from 'react-scroll'

const Download = () => {
  return (
    <section>
      <Element name="download" className="g7 relative pt-24 pb-32 max-lg:pb-24 max-md:py-16">
           
        <div className='container'>

          <div className='flex items-center'>
            
            <div className='relative flex-540  max-xl:flex-280 max-lg:flex-256 max-md:flex-100 mr-6'>

              <div className='mb-10'>
                <img src='/images/xora.svg' width={160} height={55} />
              </div>

              <p className='body-1 mb-10 max-w-md'>
                Try it now for free on IOS, Android, PC, Web - we've got you covered all over ;)
              </p>

              <ul className='flex flex-wrap items-center gap-6'>
                
                {links.map(({id , url , icon}) => (
                
                  <li key = {id} className='download_tech-link download_tech-link_last-before download_tech-link_last-after'>
                     
                    <a href={url} className='size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500'>
                      <span className='absolute -top-2 rotate-90'>
                        <Marker/>
                      </span>

                      <img src = {"/images/lines.svg"} className='absolute size-13/20 object-contain' />

                      <span className='download_tech-icon'>{icon}</span>
                    </a>

                  </li>
                
                ))}
              </ul>

            </div>


            <div className='mb-10 max-md:hidden'>
              <div className='rounded-40 relative w-[955px] download_preview-before download_preview-after border-2 border-s5 p-6'>

                <div className='relative rounded-3xl bg-s1 px-6 pb-6 pt-14'>
                  <span className='download_preview-dot left-6 bg-p2'></span>
                  <span className='download_preview-dot left-11 bg-s3'></span>
                  <span className='download_preview-dot left-16 bg-p1/15'></span>

                  <img src = "/images/screen.jpg" width={856} height={656} className='rounded-xl'/>
                </div>
              
              </div>
            </div>

          </div>


          <ul className='mt-24 flex justify-center max-lg:hidden'>
            {logos.map(({id , url, width, height, title}) => (
              <li key= {id} className='mx-10'>
                <img src={url} width={width} height={height} alt={title}/>
              </li>
            ))}
          </ul>

        </div>

      </Element>
    </section>
  )
}

export default Download