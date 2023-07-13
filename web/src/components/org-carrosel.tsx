'use client'

import { Carousel, ThemeProvider } from '@material-tailwind/react'

export default function CustomCarousel() {
  return (
    <ThemeProvider>
      <Carousel
        className="w-full border-b-2 border-t-2 border-gray-200 sm:h-[204px] md:h-[554px] "
        transition={{ duration: 1.5 }}
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="z-3 absolute bottom-6 left-2/4 flex -translate-x-2/4 gap-3">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-16 bg-green-500' : 'w-8 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div>
          <img
            src="https://images.tcdn.com.br/files/1152477/themes/53/img/settings/destemidosna_bannerfull.png"
            alt="image 1"
            className=" w-full object-cover sm:h-[200px] md:h-[550px]"
          />
        </div>
        <img
          src="https://assets-prd.ignimgs.com/2022/05/12/classic-board-games-1652389030946.png?width=1280"
          alt="image 2"
          className="w-full object-cover sm:h-[200px] md:h-[550px]"
        />
        <img
          src="https://image.cnbcfm.com/api/v1/image/104151701-GettyImages-143949731.jpg?v=1481108000&w=1920&h=1080"
          alt="image 3"
          className="w-full object-cover sm:h-[200px] md:h-[550px]"
        />
      </Carousel>
    </ThemeProvider>
  )
}
