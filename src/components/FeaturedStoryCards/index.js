import React, { useCallback, useState, useEffect } from "react";
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import useSWR from 'swr';
import fetcher from "../../utils/fetcher";

const FeaturedStoryCards = () => {
  const url = 'https://api.testworks.co.kr'
  const { data: featuredStoryDatas } = useSWR('https://api.testworks.co.kr/featured-stories', fetcher)

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        grabCursor={true}
        slidesPerView={3}
        navigation={true}
        className="story-swiper"
      >
        <div className="featured-storylist">
          {featuredStoryDatas && (
            featuredStoryDatas.map((data) => (
              <SwiperSlide key={data.id}>
                <a href={data.body}
                  className='story-container'>
                  <div className='story-img'>
                    <img src={url + data.thumbnail.url} alt="img" />
                  </div>
                  <div className='story-info'>
                    <h2 className="story-title">{data.title}</h2>
                    <div className="story-date">{data.updated_at}</div>
                  </div>
                </a>
              </SwiperSlide>
            ))
          )}
        </div>
      </Swiper>
    </>
  )
}
export default FeaturedStoryCards;