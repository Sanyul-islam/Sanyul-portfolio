"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const stack = [
  "HTML5",
  "CSS",
  "Javascript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "BetterAuth",
  "React",
  "Next.js",
  "HeroUI",
  "TailwindCSS",
  "Git",
  "Github",
  "Vercel",
  "Figma",
  "Netlify",
];

export default function TechStack() {
  return (
    <div className="mx-auto mt-6 max-w-content overflow-hidden border-y border-panelLine bg-panel px-6 py-6 md:px-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
        }}
        className="tech-stack-swiper"
      >
        {stack.map((item) => (
          <SwiperSlide key={item}>
            <div className="flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide text-muted transition-colors duration-300 hover:text-accent">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
