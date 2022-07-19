import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style.module.css';

// icon png
import icongear from './icongear.png';
import iconjournal from './iconjournal.png';
import iconlogout from './iconlogout.png';
import iconparkoutline from './iconparkoutline.png';
import iconquestion from './iconquestion.png';
import iconreceipt from './iconreceipt.png';

// Utils
import MoneyFormatter from '../../utils/MoneyFormatter';

const ProfileCard = () => {
  const customer = useSelector((state) => state.customer.value);

  return (
    <div className={`card ${style.card_body}`}>
      <div className="card-body p-4">
        <div className="p-4">
          <img
            width={120}
            height={120}
            src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&rounded=true&name=${customer?.name}`}
            className="img-circle"
            alt="Profile"
          />
        </div>
        <div className="card-body">
          <h5>{customer?.name}</h5>
          <p className="mb-0">{MoneyFormatter.format(customer?.point || 0)} point</p>
        </div>

        {/* Card Title Body */}

        <div className="card-body p-3">
          <div>
            <Link className={style.text_link} to="/informasi-akun">
              <img className={style.body_hover} src={iconjournal} alt="journal" />
              <span className="mx-2">Informasi Akun</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/pengaturan">
              <img className={style.body_hover} src={icongear} alt="gear" />
              <span className="mx-2">Pengaturan Akun</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/transaksi">
              <img className={style.body_hover} src={iconparkoutline} alt="parkoutline" />
              <span className="mx-2">Transaksiku</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/bantuan">
              <img className={style.body_hover} src={iconquestion} alt="question" />
              <span className="mx-2">Bantuan</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/redeem">
              <img className={style.body_hover} src={iconreceipt} alt="receipt" />
              <span className="mx-2">Redeem Point</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/sign-out">
              <img className={style.body_hover} src={iconlogout} alt="logout" />
              <span className="mx-2">Keluar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
