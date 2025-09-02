'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // add navigation styles
import { FreeMode, Navigation } from 'swiper/modules';
import { TopCategories } from '@/utils/utils';
import Image from 'next/image';

const CategorySlider = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto mt-8 relative">
            {/* Navigation Buttons */}
            <button
                className="swiper-button-prev-custom absolute left-1 top-1/2 z-10 transform -translate-y-1/2 
                           bg-white shadow-md border rounded-full w-8 h-8 flex items-center justify-center
                           hover:bg-[#276680] hover:text-white transition-all duration-300"
            >
                ‹
            </button>
            <button
                className="swiper-button-next-custom absolute right-1 top-1/2 z-10 transform -translate-y-1/2 
                           bg-white shadow-md border rounded-full w-8 h-8 flex items-center justify-center
                           hover:bg-[#276680] hover:text-white transition-all duration-300"
            >
                ›
            </button>

            <Swiper
                freeMode={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    500: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                }}
            >
                {TopCategories?.map((category, indx) => (
                    <SwiperSlide key={indx}>
                        <div
                            className="border group rounded-md flex justify-center bg-white items-center flex-col p-2 sm:p-3 
                         transition-all duration-400 hover:border-[#276680] hover:shadow-xs"
                        >
                            <Image
                                alt={category.name}
                                src={category.image}
                                width={100}
                                height={100}
                                quality={100}
                                className="w-6 sm:w-12"
                            />
                            <h3 className="text-[8px] group-hover:text-[#276680] text-gray-500 sm:text-xs text-center mt-3 lg:text-sm">
                                {category.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategorySlider;
