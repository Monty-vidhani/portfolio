import React, { useRef, useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import useSound from 'use-sound';


const projects = [
  {
    id: 1,
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlNTdmMGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy11cC1pY29uIGx1Y2lkZS10cmVuZGluZy11cCI+PHBhdGggZD0iTTE2IDdoNnY2Ii8+PHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIvPjwvc3ZnPg==" ,
    title: 'TradeNest',
    description: 'Stock trading simulation app with buy/sell features.',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjAwMGQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb21wYXNzLWljb24gbHVjaWRlLWNvbXBhc3MiPjxwYXRoIGQ9Im0xNi4yNCA3Ljc2LTEuODA0IDUuNDExYTIgMiAwIDAgMS0xLjI2NSAxLjI2NUw3Ljc2IDE2LjI0bDEuODA0LTUuNDExYTIgMiAwIDAgMSAxLjI2NS0xLjI2NXoiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==",
    title: 'Wanderlust',
    description: 'Travel planner using React & APIs.',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjczMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtcGVuLWljb24gbHVjaWRlLWNsaXBib2FyZC1wZW4iPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHg9IjgiIHk9IjIiIHJ4PSIxIi8+PHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJoLTUuNSIvPjxwYXRoIGQ9Ik00IDEzLjVWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNMTMuMzc4IDE1LjYyNmExIDEgMCAxIDAtMy4wMDQtMy4wMDRsLTUuMDEgNS4wMTJhMiAyIDAgMCAwLS41MDYuODU0bC0uODM3IDIuODdhLjUuNSAwIDAgMCAuNjIuNjJsMi44Ny0uODM3YTIgMiAwIDAgMCAuODU0LS41MDZ6Ii8+PC9zdmc+",
    title: 'Paste',
    description: 'Pastebin-style app to share text/code snippets.',
    github: '#',
    live: 'https://paste-app-taupe-eight.vercel.app/'
  },
  {
    id: 4,
    image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDgwMGYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3QtaWNvbiBsdWNpZGUtYm90Ij48cGF0aCBkPSJNMTIgOFY0SDgiLz48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHg9IjQiIHk9IjgiIHJ4PSIyIi8+PHBhdGggZD0iTTIgMTRoMiIvPjxwYXRoIGQ9Ik0yMCAxNGgyIi8+PHBhdGggZD0iTTE1IDEzdjIiLz48cGF0aCBkPSJNOSAxM3YyIi8+PC9zdmc+",
    title: 'Sera: The AI Chatbot',
    description: 'AI chatbot using Google Gemini API. ',
    github: '#',
    live: '#'
  },
  {
    id: 5,
    image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwYmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1YmJsZXMtaWNvbiBsdWNpZGUtYnViYmxlcyI+PHBhdGggZD0iTTcuMiAxNC44YTIgMiAwIDAgMSAyIDIiLz48Y2lyY2xlIGN4PSIxOC41IiBjeT0iOC41IiByPSIzLjUiLz48Y2lyY2xlIGN4PSI3LjUiIGN5PSIxNi41IiByPSI1LjUiLz48Y2lyY2xlIGN4PSI3LjUiIGN5PSI0LjUiIHI9IjIuNSIvPjwvc3ZnPg==",
    title: 'Bubble Game',
    description: 'Fun bubble popping game using HTML/CSS/JS.',
    github: '#',
    live: '#'
  },
];



const CardCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [click] = useSound('/click.mp3') ;

 const handleCardClick = (clickedIndex) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const realIndex = swiper.realIndex;
      click() ;

      if (clickedIndex === 0) {
        swiper.slidePrev();
      } else if (clickedIndex === 2) {
        swiper.slideNext();
      }
    }
  };


  return (
    <>
      <Swiper
          ref={swiperRef}
          effect="coverflow"
          // grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          // spaceBetween={30}
          loop={true}
          speed={500}
          coverflowEffect={{
            rotate: -25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full flex justify-between items-center  h-8/10"
          breakpoints={{
            320: { 
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: { 
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
            {projects.map((project) => (
               <SwiperSlide key={project.id}  className="!flex !flex-row !justify-center !items-center" >
                            {({ isActive, isPrev, isNext }) => (
                              <div 
                                onClick={() => handleCardClick(isActive ? 1 : isPrev ? 0 : 2)}
                                className={` w-7/10 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-lg h-full flex flex-col justify-center items-center transition-all duration-500 cursor-pointer 
                                `}
                              >
                                <div className='w-9/10 h-19/20 flex flex-col justify-evenly items-center'>
                                  <div className='h-6/10 w-full object-cover rounded-2xl overflow-hidden'><img src={project.image} alt="" className='h-full w-full' /></div>
                               <div className='font-[Helvetica_Now_Display] text-3xl'>{project.title}</div>
                               <div className='font-[Helvetica_Now_Display] text-xl'>{project.description}</div>
                               <div className='font-[Helvetica_Now_Display] text-xl flex w-full justify-evenly items-center'>
                               <a href="" className='bg-blue-500 p-2 w-2/10 rounded-lg text-center'>github</a>
                               <a href={project.live} className='bg-blue-500 p-2 w-2/10 rounded-lg text-center'>live</a>
                               </div>
                                </div>

                              </div>
                            )}
                          </SwiperSlide>
            ))}
          </Swiper>
    </>
  )
}

export default CardCarousel