import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Card, CardContent, Typography } from '@mui/material';
import { services } from '../data/dummydata';

// Import Swiper core styles
import 'swiper/css';

// Import Swiper core module
import SwiperCore from 'swiper';

// Install Swiper modules
SwiperCore.use([]);

const Services = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="services-container" style={{ padding: '0 150px', position: 'relative' }}>
      <Typography variant="h4" style={{ textAlign: 'center', color: 'yellow', marginBottom: '20px', position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        Services We Provide
      </Typography>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={false} // Ensure cards start from the very left
        initialSlide={0}
      >
        {services.map((card, index) => (
          <SwiperSlide key={index}>
            <Card className="square-card" style={{ width: '300px', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.2)',borderRadius:'20px' }}>
              <CardContent>
                <Typography variant="h6" component="div" style={{ color: 'white', paddingTop: 160 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
