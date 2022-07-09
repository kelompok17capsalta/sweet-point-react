import React from "react";
import style from "./style.module.css";

const Bantuan = () => {
  const faqs = [
    {
      question: 'Bagaimana cara mengubah kata sandi saya ?',
      answer: 'Anda dapat melakukan update password pada halaman pengaturan Akun.',
    },
    {
      question: 'Bagaimana cara saya mendaftar di sweet point ?',
      answer: 'Anda dapat mendaftarkan akun baru dengan menekan tombol Sign up pada tombol di navbar di atas.',
    },
    {
      question: 'Bagaimana cara mengubah atau memperbarui nomor ponsel saya ?',
      answer: 'Anda dapat melakukan update password pada halaman informasi Akun.',
    },
    {
      question: 'Bagaimana cara menukarkan cashback point ?',
      answer: 'Anda dapat menukarkan point anda dengan mengakses halaman redeem point, lalu memilih kategori yang ingin ditukarkan.',
    },
    {
      question: 'Bagaimana cara berbelanja agar mendapatkan cashback point ?',
      answer: 'Pertama, pastikan toko sudah bekerja sama dengan Sweet Point. Lalu informasikan username sweet point kamu ke penjual, agar penjual dapat mengirimkan data transaksi untuk kami tukarkan.',
    },
  ];

  return (
    <>
      <div className="position-relative d-flex justify-content-center align-items-center">
        <h5 className={style.titleImage}>
          <strong>Hai ada yang bisa kami bantu ?</strong>
        </h5>
        <img
          src="/assets/images/background/background.jpg"
          alt="background"
          className="img-fluid"
        />
      </div>
      <div className="container">
        <h5 className="mt-3 mb-5 d-flex justify-content-center">
          <strong>Pertanyaan Populer ?, Temukan Jawabanmu disini</strong>
        </h5>
        <div className="mt-5">
          <div className="mt-5 d-grid gap-1">
            {faqs.map(({question, answer}, faqIdx) => (
              <React.Fragment key={faqIdx}>
              <button
                className="btn btn-outline-secondary text-start"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#question-${faqIdx}`}
                aria-expanded="false"
                aria-controls={`question-${faqIdx}`}
              >
                {question}
                <i className="bi bi-chevron-down float-end"></i>
              </button>
              <div className="collapse" id={`question-${faqIdx}`}>
                <div className="card card-body">
                  {answer}
                </div>
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <h5 className="d-flex justify-content-center mt-5">
            <strong>Apakah kamu punya pertanyaan lain ?</strong>
          </h5>
          <div className="d-flex justify-content-center mt-4">
            <div className="row">
              <button className="btn btn-light text-start">
                <img
                  src="/assets/images/icons/envelope.svg"
                  className={style.imgIcon}
                />
                <strong style={{ color: "#5D6FFF" }}>Email</strong>
              </button>
            </div>
            <button className="btn btn-light text-start ms-4">
              <img
                src="/assets/images/icons/whatsapp.svg"
                className={style.imgIcon}
              />
              <strong style={{ color: "#5D6FFF" }}>Whatsapp</strong>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <a className={`btn btn-primary rounded-circle mb-4 ${style.chat}`}>
            <h3 class="bi bi-chat-fill "></h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default Bantuan;
