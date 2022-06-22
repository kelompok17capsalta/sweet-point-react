import { useState } from 'react';
import { Navigation, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './style.module.css';

// Global Component
import PopularRedeemItem from '../PopularRedeemItem';

const PopularRedeem = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const redeems = [
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
    {
      name: 'Paket C',
      img: '/assets/images/redeems/dana.png',
      point: 70,
      description: 'Paket ini berisi saldo e-money dengan total uang senilai 50.000 rupiah',
    },
  ];

  const handlePrevSlide = () => {
    controlledSwiper?.slidePrev();
  };

  const handleNextSlide = () => {
    controlledSwiper?.slideNext();
  };

  return (
    <div className={`card ${styles.card_bg} p-3`}>
      <p className="h4 card-title">Popular Redeem</p>

      <div className="position-relative" style={{ maxWidth: '100%'}}>
        <span tabIndex={0} className={`h2 text-primary bi bi-arrow-left-circle-fill ${styles.navigation} ${styles.navigation__prev}`} onClick={handlePrevSlide} />
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
        >
         {redeems.map((redeem, redeemIdx) => (
          <SwiperSlide key={redeemIdx}>
            <PopularRedeemItem {...redeem} />
          </SwiperSlide>
         ))}
        </Swiper>
        <span tabIndex={0} className={`h2 text-primary bi bi-arrow-right-circle-fill ${styles.navigation} ${styles.navigation__next}`} onClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default PopularRedeem;
