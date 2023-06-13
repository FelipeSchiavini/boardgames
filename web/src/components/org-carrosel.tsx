'use client'

import { Carousel, ThemeProvider } from '@material-tailwind/react'

export default function CustomCarousel() {
  return (
    <ThemeProvider>
      <Carousel
        className="h-96 w-full border-b-2 border-t-2 border-gray-200"
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
      >
        <div>
          <img
            src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_25/3390425/board-games-kr-2x1-tease-200616.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src="https://assets-prd.ignimgs.com/2022/05/12/classic-board-games-1652389030946.png?width=1280"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://image.cnbcfm.com/api/v1/image/104151701-GettyImages-143949731.jpg?v=1481108000&w=1920&h=1080"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </ThemeProvider>
  )
}
