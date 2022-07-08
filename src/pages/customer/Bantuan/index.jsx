import React from "react";
import style from "./style.module.css";

function index() {
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
            <button
              className="btn btn-outline-secondary text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Bagaimana cara mengubah kata sandi saya ?
              <i className="bi bi-chevron-down float-end"></i>
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <button
              className="btn btn-outline-secondary text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample1"
            >
              Bagaimana cara saya mendaftarkan di sweet point ?
              <i className="bi bi-chevron-down float-end"></i>
            </button>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <button
              className="btn btn-outline-secondary text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              Bagaimana cara mengubah atau memperbarui nomor ponsel saya ?
              <i className="bi bi-chevron-down float-end"></i>
            </button>
            <div className="collapse" id="collapseExample2">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <button
              className="btn btn-outline-secondary text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              Bagaimna cara menukarkan cashback point ?
              <i className="bi bi-chevron-down float-end"></i>
            </button>
            <div className="collapse" id="collapseExample3">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
            <button
              className="btn btn-outline-secondary text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample4"
            >
              Bagaimana cara berbelanja agar mendapatkan cashback point ?
              <i className="bi bi-chevron-down float-end"></i>
            </button>
            <div className="collapse" id="collapseExample4">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </div>
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

export default index;
