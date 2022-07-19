import React from 'react';

import cashout from './cashout.png';
import eMoney from './e-money.png';
import paket from './paket.png';
import pulsa from './pulsa.png';
import styles from './style.module.css';

// import RedeemStatsCard from '../../../components/RedeemStatsCard';
import ProductCategoryCard from '../../../components/ProductCategoryCard';

const Redeem = () => (
  <div className={`container mt-5 ${styles.container}`}>
    {/* <div className="d-flex justify-content-center flex-wrap gap-5">
      <RedeemStatsCard title="Total Redeem" value={85125} />
      <RedeemStatsCard title="Monthly Redeem" value={85125} />
      <RedeemStatsCard title="Weekly Redeem" value={85125} />
      <RedeemStatsCard title="Todays Redeem" value={85125} />
    </div> */}
    <span className={`mt-5 ${styles.header}`}>Product Categories</span>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      <ProductCategoryCard
        title="Cash Out"
        image={cashout}
        redirectTo="/admin/redeem/cash_out"
      />
      <ProductCategoryCard
        title="E-Money"
        image={eMoney}
        redirectTo="/admin/redeem/e-money"
      />
      <ProductCategoryCard
        title="Pulsa"
        image={pulsa}
        redirectTo="/admin/redeem/pulsa"
      />
      <ProductCategoryCard
        title="Paket Data"
        image={paket}
        redirectTo="/admin/redeem/paket_data"
      />
    </div>
  </div>
);

export default Redeem;
