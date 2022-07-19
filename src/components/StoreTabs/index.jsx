import { useState } from 'react';

import styles from './style.module.css';

import StoreTabItem from '../StoreTabItem';

const StoreTabs = () => {
  const [currentStore, setCurrentStores] = useState('online');

  const onlineStores = [
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
  ];

  const traditionalStores = [
    {
      name: 'Nivea',
      img: '/assets/images/stores/nivea.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Nike',
      img: '/assets/images/stores/nike.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Unilever',
      img: '/assets/images/stores/unilever.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Erigo',
      img: '/assets/images/stores/erigo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Philips',
      img: '/assets/images/stores/philips.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Uniqlo',
      img: '/assets/images/stores/uniqlo.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Motul',
      img: '/assets/images/stores/motul.png',
      description: 'Cashback 100 Point',
    },
    {
      name: 'Zoya',
      img: '/assets/images/stores/zoya.png',
      description: 'Cashback 100 Point',
    },
  ];

  const handleStoreChange = (event) => {
    if (!event.target.classList.contains('active')) {
      setCurrentStores(currentStore === 'online' ? 'traditional' : 'online');
    }
  };

  const setActiveClass = (state) => {
    if (currentStore === state) return 'text-primary active';
    return 'text-secondary';
  };

  return (
    <div className={`card ${styles.card_bg} p-3`}>
      <ul className="nav nav-tabs">
        <li className={`nav-item ${styles.tab_item}`} onClick={handleStoreChange}>
          <span className={`nav-link text-center ${setActiveClass('online')}`}>Online <br className="d-lg-none" /> store</span>
        </li>
        <li className={`nav-item ${styles.tab_item}`} onClick={handleStoreChange}>
          <span className={`nav-link text-center ${setActiveClass('traditional')}`}>Traditional Store</span>
        </li>
      </ul>

      <div className="row">
        {currentStore === 'online' && onlineStores.map((store, storeIdx) => (
          <StoreTabItem key={`${store.name}-${storeIdx}`} className="col-6 col-md-4 col-lg-3 mt-3" {...store} />
        ))}

        {currentStore === 'traditional' && traditionalStores.map((store) => (
          <StoreTabItem key={store.name} className="col-6 col-md-4 col-lg-3 mt-3" {...store} />
        ))}
      </div>
    </div>
  );
};

export default StoreTabs;
