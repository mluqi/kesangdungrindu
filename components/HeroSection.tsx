'use client'; 

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SlideItem {
  id: number;
  imageUrl: string;
  altText: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC = () => {
  const slides: SlideItem[] = [
    {
      id: 1,
      imageUrl: '/hero1.jpg',
      altText: 'Slide 1',
      title: 'Innovative Solutions',
      subtitle: 'Creating cutting-edge technology for your business',
      ctaText: 'Learn More',
      ctaLink: '/solutions',
    },
    {
      id: 2,
      imageUrl: '/hero2.jpg',
      altText: 'Slide 2',
      title: 'Global Expertise',
      subtitle: 'World-class services with local understanding',
      ctaText: 'Our Services',
      ctaLink: '/services',
    },
    {
      id: 3,
      imageUrl: '/hero3.jpg',
      altText: 'Slide 3',
      title: 'Trusted Partner',
      subtitle: 'Collaborating to achieve your digital transformation',
      ctaText: 'Contact Us',
      ctaLink: '/contact',
    },
  ];

  return (
    <div className="relative w-full h-screen max-h-[800px]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <Image
              src={slide.imageUrl}
              alt={slide.altText}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute z-20 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-100">
                  {slide.subtitle}
                </p>
                {slide.ctaText && (
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors animate-fadeIn delay-200"
                  >
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;