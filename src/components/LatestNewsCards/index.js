import React, { useState, useEffect, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from "react-router-dom";


const LatestNewsCards = () => {
  const url = 'https://api.testworks.co.kr';
  const { data: latestNewsDatas } = useSWR('https://api.testworks.co.kr/latest-news', fetcher)

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        className="press-swiper"
      >
        <div className="latest-newlist">
          {
            latestNewsDatas?.map((data) => (
              <SwiperSlide key={data.id}>
                <NavLink
                  className='card-container'
                  to={`/latestnewsdetail/${data.id}`}>
                  <div className='news-img'>
                    <img src={url + data.thumbnail.url} alt="img" />
                  </div>
                  <div className='news-info'>
                    <h2 className="news-title">{data.title}</h2>
                    <div className="news-date">{data.updated_at}</div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>


    </>
  )
};

export default LatestNewsCards;
