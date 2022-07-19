import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import cashout from './cashout.png';
import emoney from './emoney.png';
import paket from './paket.png';
import pulsa from './pulsa.png';

const LogoRedeem = ({ text, category }) => {
  const image = () => {
    if (text === 'Cash Out') {
      return cashout;
    }
    if (text === 'E-Money') {
      return emoney;
    }
    if (text === 'Paket Data') {
      return paket;
    }
    if (text === 'Pulsa') {
      return pulsa;
    }
  };
  return (
    <>
      {/* Ada style activenya ya */}

      <Link to={`/redeem/${category}`} className={`${style.redeem__category}`}>
        <img src={image()} alt="text" />
        <span>{text}</span>
      </Link>
    </>
  );
};

export default LogoRedeem;
