import banner from './banner.png';
import styles from './style.module.css';

const FAQ = () => (
  <>
    <section className={`position-relative ${styles.banner}`}>
      <img src={banner} alt="background" className="h-100" />
      <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
        <h1 className="text-light fw-bold p-3 h3 text-center">Hai ada yang bisa kami bantu ?</h1>
      </div>
    </section>

    <section className="mt-3 container pb-5 mb-5">
      <h2 className="text-center h4 fw-bold mb-5">Pertanyaan Populer ?, Temukan Jawabanmu Disini</h2>

      <ul class="list-group">
        <li class="list-group-item">
            <button class="btn btn-none w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
              <span>Bagaimana cara mengubah kata sandi saya ? </span>
              <span class="bi bi-chevron-down" />
            </button>

            <div className='collapse px-3 mt-3' id="faq1">
              Anda dapat melakukan update password pada halaman pengaturan Akun.
            </div>
        </li>

        <li class="list-group-item">
            <button class="btn btn-none w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
              <span>Bagaimana cara mengubah kata sandi saya ? </span>
              <span class="bi bi-chevron-down" />
            </button>

            <div className='collapse px-3 mt-3' id="faq2">
              Anda dapat melakukan update password pada halaman pengaturan Akun.
            </div>
        </li>

        <li class="list-group-item">
            <button class="btn btn-none w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
              <span>Bagaimana cara mengubah kata sandi saya ? </span>
              <span class="bi bi-chevron-down" />
            </button>

            <div className='collapse px-3 mt-3' id="faq3">
              Anda dapat melakukan update password pada halaman pengaturan Akun.
            </div>
        </li>

        <li class="list-group-item">
            <button class="btn btn-none w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
              <span>Bagaimana cara mengubah kata sandi saya ? </span>
              <span class="bi bi-chevron-down" />
            </button>

            <div className='collapse px-3 mt-3' id="faq4">
              Anda dapat melakukan update password pada halaman pengaturan Akun.
            </div>
        </li>

        <li class="list-group-item">
            <button class="btn btn-none w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
              <span>Bagaimana cara mengubah kata sandi saya ? </span>
              <span class="bi bi-chevron-down" />
            </button>

            <div className='collapse px-3 mt-3' id="faq5">
              Anda dapat melakukan update password pada halaman pengaturan Akun.
            </div>
        </li>
      </ul>
    </section>

    <section className={`mt-3 ${styles.contact} position-relative`}>
      <div className="p-3">
        <div className="container p-5 d-flex flex-column justify-content-center">
          <h2 className="text-center h4 fw-bold mb-5">Apakah kamu punya pertanyaan lain?</h2>

          <div className="d-flex flex-column flex-lg-row justify-content-center">
            <div className={`card d-flex flex-row align-items-center p-3 mb-5 mb-lg-0 me-lg-5 ${styles.contact_card}`}>
              <div className={`btn border-primary rounded-circle me-3 ${styles.contact_circle} d-flex justify-content-center align-items-center`}>
                <span class="bi bi-envelope text-primary h2 my-0" />
              </div>

              <div className="d-flex flex-column">
                <span className="fs-5 fs-lg-3 text-primary">Email</span>
                <span className="fs-6 fs-lg-4">Tulis pertanyaanmu sekarang</span>
              </div>
            </div>

            <div className={`card d-flex flex-row align-items-center p-3 ${styles.contact_card}`}>
              <div className={`btn border-primary rounded-circle me-3 ${styles.contact_circle} d-flex justify-content-center align-items-center`}>
                <span class="bi bi-whatsapp text-primary h2 my-0" />
              </div>

              <div className="d-flex flex-column">
                <span className="fs-5 fs-lg-3 text-primary">Whatsapp</span>
                <span className="fs-6 fs-lg-4">085000000000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="position-absolute bottom-0 end-0 mb-3 me-3">
        <button type="button" className={`btn btn-primary rounded-circle ${styles.contact_circle}`}>
          <span className="bi bi-chat-dots fs-4" />
        </button>
      </div>
    </section>
  </>
);

export default FAQ;
