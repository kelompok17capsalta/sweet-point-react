import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

//icon png
import icongear from "./icongear.png";
import iconjournal from "./iconjournal.png";
import iconlogout from "./iconlogout.png";
import iconparkoutline from "./iconparkoutline.png";
import iconquestion from "./iconquestion.png";
import iconreceipt from "./iconreceipt.png";

const ProfileCard = () => {
  return (
    <div className={`card ${style.card_body}`}>
      <div className="card-body p-4">
        <div className="p-4">
          <img src="" className="img-circle" alt="" />
        </div>
        <div className="card-body">
          <h5>Asep Yahud</h5>
          <p>254.000 point</p>
        </div>

        {/* Card Title Body */}

        <div className="card-body mx-2 p-3">
          <div>
            <Link className={style.text_link} to="/akun/informasi">
              <img className={style.body_hover} src={iconjournal} alt="journal" />
              <span className="mx-2">Pengaturan Profil</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/akun/pengaturan">
              <img className={style.body_hover} src={icongear} alt="gear" />
              <span className="mx-2">Pengaturan Akun</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/akun/transaksi">
              <img className={style.body_hover} src={iconparkoutline} alt="parkoutline" />
              <span className="mx-2">My Transaction</span>
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
              <span className="mx-2">Radeem Category</span>
            </Link>
          </div>
          <div className="mt-3">
            <Link className={style.text_link} to="/sign-out">
              <img className={style.body_hover} src={iconlogout} alt="logout" />
              <span className="mx-2">Log Out</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
