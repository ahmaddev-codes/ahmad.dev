import { React, useEffect } from "react";
import "../portfolio/Portfolio.scss";
import { TiArrowSortedUp } from "react-icons/ti";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from "aos";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Portfolio = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <h1>My Portfolio</h1>
        <h2>10+ projects in Design & Web Development</h2>
      </div>

      <div
        className="slider__container"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          fadeEffect
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            425: {
              width: 415,
              slidesPerView: 1,
            },
            768: {
              width: 730,
              slidesPerView: 2,
            },
            1024: {
              width: 1000,
              slidesPerView: 3,
            },
            1440: {
              width: 1400,
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <a
              className="slider__content1"
              href="http://ebryheemxpression.vercel.app"
              rel="noreferrer"
              target="_blank"
            >
              <h2>01</h2>

              <div className="slider__content1__link">
                <h2>EbryheemXpression</h2>

                <div className="link__text">
                  <p>View live website</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              className="slider__content2"
              href="http://fylofile.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <h2>02</h2>

              <div className="slider__content2__link">
                <h2>Fylo Landing Page</h2>

                <div className="link__text">
                  <p>View live website</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              className="slider__content3"
              href="https://www.behance.net/gallery/153850389/Chase-Fintech-Application"
              rel="noreferrer"
              target="_blank"
            >
              <h2>03</h2>

              <div className="slider__content3__link">
                <h2>Chase Dashbaord Design</h2>

                <div className="link__text">
                  <p>View Design</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              className="slider__content4"
              href="https://treasurenft.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <h2>04</h2>

              <div className="slider__content4__link">
                <h2>Treasure NFT Landing Page</h2>

                <div className="link__text">
                  <p>View live website</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              className="slider__content5"
              href="https://sneakers-ecommerce-product.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <h2>05</h2>

              <div className="slider__content5__link">
                <h2>Sneakers Product Page</h2>

                <div className="link__text">
                  <p>View live website</p>

                  <div className="card__arrow" id="arrowTail">
                    <TiArrowSortedUp id="arrowHead" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
