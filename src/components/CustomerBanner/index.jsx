import { useState } from 'react';
import { Navigation, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerFile1 from './banner/banner-1.jpg';
import styles from './style.module.css';

export default function Banner() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const handlePrevSlide = () => {
    controlledSwiper?.slidePrev();
  };

  const handleNextSlide = () => {
    controlledSwiper?.slideNext();
  };

  return (
    <div>
      <div className="position-relative" style={{ maxWidth: '100%'}}>
        <span tabIndex={0} className={`h2 text-primary bi bi-arrow-left-circle-fill ${styles.navigation} ${styles.navigation__prev}`} onClick={handlePrevSlide} />
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
        >
          {[1,2,3,4].map(() => (
            <SwiperSlide>
              <img src={bannerFile1} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
        <span tabIndex={0} className={`h2 text-primary bi bi-arrow-right-circle-fill ${styles.navigation} ${styles.navigation__next}`} onClick={handleNextSlide} />
      </div>
    </div>
  );
}
