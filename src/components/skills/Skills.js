import { React, useEffect } from "react";
import "../skills/Skills.scss";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import skillsProfile from "../../images/bitmoji-7.png";
import skillImage1 from "../../icons/ui design.png";
import skillImage2 from "../../icons/ux design.png";
import skillImage3 from "../../icons/graphic design.png";
import skillImage4 from "../../icons/web dev.png";
import skillImage5 from "../../icons/responsive web.png";
import Aos from "aos";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h1>My Special Skills</h1>
        <h2>Things I can do that will blow your mind</h2>
      </div>

      <img src={skillsProfile} alt="skills profile" data-aos="fade-in"></img>

      <div className="skills__container">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          fadeEffect
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            425: {
              width: 415,
              slidesPerView: 2,
            },
            768: {
              width: 730,
              slidesPerView: 3,
            },
            1024: {
              width: 1000,
              slidesPerView: 4,
            },
            1440: {
              width: 1400,
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <div className="skill">
              <div className="skill__header">
                <img src={skillImage1} alt="skill"></img>
              </div>

              <p>Web UI Design</p>

              <p>
                Creating designs that are centered around accessibility and
                inclusivity, by ensuring that UI and UX are designed to be user
                centered.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill">
              <div className="skill__header">
                <img src={skillImage2} alt="skill"></img>
              </div>

              <p>User Experience Design</p>

              <p>
                Empathizing with users to define their problems and ideating the
                best possible solution, creating wireframes and final prototype
                for the development stage.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill">
              <div className="skill__header">
                <img src={skillImage3} alt="skill"></img>
              </div>

              <p>Graphic Design</p>

              <p>
                Creating cutting-edge design to provide a rich and pixel perfect
                image format for the web or printing.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill">
              <div className="skill__header">
                <img src={skillImage4} alt="skill"></img>
              </div>

              <p>Web Development</p>

              <p>
                Building scalable, interactive and reusable components for
                websites to extend its functionalities and provide better user
                satisfaction.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skill">
              <div className="skill__header">
                <img src={skillImage5} alt="skill"></img>
              </div>

              <p>Responsive Website</p>

              <p>
                Adding media queries for responsive adaptable on different
                devices for better user experience, using the mobile first
                approach to ensure that nothing breaks.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
