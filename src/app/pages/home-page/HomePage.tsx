import { Link } from "react-router-dom";
import "./homePage.css";
import clockWhite from "../../assets/Images/clock-white.png";
import veggies from "../../assets/Images/cat2.png";
import smiley from "../../assets/Images/smiley.png";
import user from "../../assets/Images/user.png";
import bagIcon from "../../assets/Images/bag-icon 2.png";
import star from "../../assets/Images/start.png";
import capsicum from "../../assets/Images/capsicum.png";
import veggies_left from "../../assets/Images/vegeis_left.png";
import "../../assets/css/style.css";
import seamlessImage from "../../assets/Images/seamless_pic.png";
import googlePlay from "../../assets/Images/googleplay.png";
import appStore from "../../assets/Images/appstore.png";
import device from "../../assets/Images/Mockup 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import bgImage from "../../assets/Images/Mask group.png";
import mobileImage from "../../assets/Images/mobile.png";
import tickCircle from "../../assets/Images/tick-circle.png";
import userImg from "../../assets/Images/3d_avatar_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import iPhoneImg from "../../assets/Images/Group 34914.png";
import list2 from "../../assets/Images/16.png";
import list3 from "../../assets/Images/17.png";
import slideImg1 from "../../assets/Images/Mask group (1).png";
import slideImg2 from "../../assets/Images/Mask group (2).png";
import slideImg3 from "../../assets/Images/Mask group (3).png";
import slideImg4 from "../../assets/Images/Mask group (4).png";

const HomePage = () => {
  const items = Array(6).fill({
    name: "John Doe",
    subtitle: " “Delivery on time every order!”",
    text: "Enjoy fast and reliable delivery of the best fruits and vegetables. We bring farm-fresh produce straight to your doorstep. Quality you.",
  });
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const vegetables = [
    { name: "Apple", image: veggies },
    { name: "Strawberry", image: veggies },
    { name: "Orange", image: veggies },
    { name: "Tomato", image: veggies },
    { name: "Apple", image: veggies },
    { name: "Strawberry", image: veggies },
    { name: "Orange", image: veggies },
    { name: "Tomato", image: veggies },
  ];

  return (
    <>
      <div className="main">
        <div className="banner_section">
          <div className="bg_image">
            <img src={bgImage} />
          </div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="banner_text">
                  <div className="text_wrap">
                    <span className="title_badge">
                      Fastest vegetable delivery services
                    </span>
                  </div>
                  <h1>
                    Fast & best{" "}
                    <span className="color-orange">fruits and vegetable</span>{" "}
                    delivery service in your town
                  </h1>
                  <p className="fs-18 color-gray">
                    Enjoy fast and reliable delivery of the best fruits and
                    vegetables.We bring farm-fresh produce straight to your
                    doorstep. Quality you can trust, speed you’ll love.
                  </p>
                </div>
                <div className="apps">
                  <ul className="d-flex align-items-center">
                    <li>
                      <img src={userImg} />
                    </li>
                    <li>
                      <img src={list2} />
                    </li>
                    <li>
                      <img src={list3} />
                    </li>
                    <li>
                      <img src={userImg} />
                    </li>
                  </ul>
                  <p className="mb-0">
                    25k + Active users
                    <br />
                    <span className="">
                      <i className="fas fa-star text-warning me-1"></i>
                      4.5 / 5.0 ( 20k + Reviews)
                    </span>
                  </p>
                </div>
                <ul className="app-btn d-flex">
                  <li>
                    <Link to="/">
                      <img src={appStore} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img src={googlePlay} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="phone_img w-100">
                  <img src={iPhoneImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_wrapper">
          <div className="up_section">
            <div className="blur_section bs_1"></div>
            <div className="blur_section bs_2"></div>
            <div className="inner_section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="box">
                      <div className="box_icon">
                        <img src={smiley} />
                      </div>
                      <div className="box_text">
                        <span className="counter_value">5000</span>
                        <span className="plus">+</span>
                        <p className="mb-0">Happy Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="box">
                      <div className="box_icon">
                        <img src={star} />
                      </div>
                      <div className="box_text">
                        <span className="counter_value">1879</span>
                        <span className="plus">+</span>
                        <p className="mb-0">Positive Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="box">
                      <div className="box_icon">
                        <img src={user} />
                      </div>
                      <div className="box_text">
                        <span className="counter_value">3855</span>
                        <span className="plus">+</span>
                        <p className="mb-0">Restaurant Listings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="box">
                      <div className="box_icon">
                        <img src={bagIcon} />
                      </div>
                      <div className="box_text">
                        <span className="counter_value" data-count="5000">
                          985M
                        </span>
                        <span className="plus">+</span>
                        <p className="mb-0">Successful deliveries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="new_section">
            <div className="new_section_inner">
              <div className="container">
                <div className="row">
                  <div className="section_title">
                    <h2 className="title">Why choose us</h2>
                    <p className="adv_title">
                      Enjoy fast and reliable delivery of the best fruits and
                      vegetables.We bring farm-fresh produce straight to your
                      doorstep.
                    </p>
                  </div>
                  <div className="box_section">
                    <div className="col-lg-6 col-md-12">
                      <div className="new_left">
                        <div className="new_data_block">
                          <div className="new_icon">
                            <img src={clockWhite} />
                          </div>
                          <div className="new_text">
                            <h6 className="fs-18">30 min Delivery</h6>
                            <p className="mb-0">
                              Enjoy fast and reliable delivery of the best
                              fruits and vegetables. We bring farm-fresh produce
                              straight to your doorstep. Quality you
                            </p>
                          </div>
                        </div>

                        <div className="new_data_block">
                          <div className="new_icon">
                            <img src={clockWhite} />
                          </div>
                          <div className="new_text">
                            <h6 className="fs-18">Quality Produce</h6>
                            <p className="mb-0">
                              Enjoy fast and reliable delivery of the best
                              fruits and vegetables. We bring farm-fresh produce
                              straight to your doorstep. Quality you
                            </p>
                          </div>
                        </div>

                        <div className="new_data_block">
                          <div className="new_icon">
                            <img src={clockWhite} />
                          </div>
                          <div className="new_text">
                            <h6 className="fs-18">Live Vegetables Check </h6>
                            <p className="mb-0">
                              Enjoy fast and reliable delivery of the best
                              fruits and vegetables. We bring farm-fresh produce
                              straight to your doorstep. Quality you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      {/* <div className="new_image">
                        <img src={capsicum} className="w-100 image_veg" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dish_section row_am">
            <div className="container">
              <div className="section_title">
                <h2 className="title">
                  Access over 5000+ veggies with just a tap
                </h2>
                <p className="adv_title">
                  Enjoy fast and reliable delivery of the best fruits and
                  vegetables. We bring farm-fresh produce straight to your
                  doorstep. Quality you
                </p>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={3000} // 2 seconds
              loop={true}
              className="dish_slider"
            >
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg1} alt="slide 1" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg2} alt="slide 2" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg3} alt="slide 3" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg4} alt="slide 4" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg1} alt="slide 4" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg2} alt="slide 4" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="ouwl-item">
                <div className="item">
                  <div className="slides">
                    <img src={slideImg3} alt="slide 4" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="row_am service_section">
            <div className="container">
              <div className="section_title">
                <h2 className="title">Advanced features</h2>
                <p className="adv_title">
                  Enjoy fast and reliable delivery of the best fruits and
                  vegetables. We bring farm-fresh produce straight to your
                  doorstep. Quality you
                </p>
              </div>
              <div className="row service_block flex-row-reverse">
                <div className="col-md-6">
                  <div className="service_text">
                    <h3 className="text-start">
                      Effortless management of vendors operations
                    </h3>

                    <p className="text-start">
                      Enjoy fast and reliable delivery of the best fruits and
                      vegetables. We bring farm-fresh produce straight to your
                      doorstep. Quality you.
                    </p>
                    <ul className="design_block">
                      <li>
                        <div className="d-flex gap-2">
                          <img src={tickCircle} className="circle_tick" />
                          <h6>Live Vegetables Check </h6>
                        </div>

                        <p className="text-start pl-3">
                          Enjoy fast and reliable delivery of the best fruits
                          and vegetables. We bring farm-fresh produce straight
                          to your doorstep. Quality you.
                        </p>
                      </li>
                      <li>
                        <div className="d-flex gap-2">
                          <img src={tickCircle} className="circle_tick" />
                          <h6>Live Vegetables Check </h6>
                        </div>
                        <p className="text-start pl-3">
                          Enjoy fast and reliable delivery of the best fruits
                          and vegetables. We bring farm-fresh produce straight
                          to your doorstep. Quality you.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner_block">
                    <div className="img position-relative">
                      <img src={mobileImage} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row service_block">
                <div className="col-md-6">
                  <div className="service_text">
                    <h3 className="text-start">
                      Seamless ordering process from app
                    </h3>

                    <p className="text-start">
                      Enjoy fast and reliable delivery of the best fruits and
                      vegetables. We bring farm-fresh produce straight to your
                      doorstep. Quality you.
                    </p>
                    <ul className="design_block">
                      <li>
                        <div className="d-flex gap-2">
                          <img src={tickCircle} className="circle_tick" />
                          <h6>Live Vegetables Check </h6>
                        </div>

                        <p className="text-start pl-3">
                          Enjoy fast and reliable delivery of the best fruits
                          and vegetables. We bring farm-fresh produce straight
                          to your doorstep. Quality you.
                        </p>
                      </li>
                      <li>
                        <div className="d-flex gap-2">
                          <img src={tickCircle} className="circle_tick" />
                          <h6>Live Vegetables Check </h6>
                        </div>
                        <p className="text-start pl-3">
                          Enjoy fast and reliable delivery of the best fruits
                          and vegetables. We bring farm-fresh produce straight
                          to your doorstep. Quality you.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="inner_block">
                    <div className="img position-relative">
                      <img src={seamlessImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="register_res row_am">
            <div className="reg_block">
              <div className="row">
                <div className="col-lg-7 col-md-10 mx-auto">
                  <div className="dap_text">
                    <div className="section_title">
                      <span className="title_badge">register restaurant</span>
                      <h2 className="title text-white">
                        Begin gaining more customers today
                      </h2>
                      <p className="sub_title">
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry lorem Ipsum has been the
                        industrys.
                      </p>
                    </div>
                    <div className="regis">
                      <div className="btn-block">
                        <Link to="/" className="btn-register">
                          Register Restaurant
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature_section row_am">
            <div className="feature_inner">
              <div className="container">
                <div className="section_title">
                  <h2 className="title">Our happy clients</h2>
                  <p className="adv_title">
                    Enjoy fast and reliable delivery of the best fruits and
                    vegetables.We bring farm-fresh produce straight to your
                    doorstep.Quality you.
                  </p>
                </div>
                <div className="px-4 md:px-8 py-6">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                  >
                    {items.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="ouwl_item max-w-[400px] mx-auto">
                          <div className="item shadow-md rounded-lg">
                            <div className="feature_box flex flex-col items-center text-center">
                              <div className="img mb-3">
                                <img
                                  src={userImg}
                                  alt="User"
                                  className="rounded-full w-20 h-20 object-cover"
                                />
                              </div>
                              <div className="text_sec">
                                <h6 className="text-lg font-semibold">
                                  {item.name}
                                </h6>
                                <p className="subtitle mt-1">{item.subtitle}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="advance_section row_am">
            <div className="adv_inner">
              <div className="blur_section bs_1"></div>
              <div className="blur_section bs_2"></div>
              <div className="container">
                <div className="section_title">
                  <span className="title_badge">Easy Steps</span>
                  <h2 className="title text-white">How it works</h2>
                  <p className="sub_title_adv">
                    Lorem Ipsum is simply dummy text of the printing indus orem
                    Ipsum has been the industrys standard dummy text ever since.
                  </p>
                </div>
                <div className="adv_list">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                      <div
                        className="box"
                        aos-init
                        aos-animate
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="box_icon">
                          <img src={smiley} />
                        </div>
                        <div className="box_text">
                          <span className="counter_value">5000</span>
                          <span className="plus">+</span>
                          <p className="mb-0">Happy Users</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                      <div
                        className="box"
                        aos-init
                        aos-animate
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="box_icon">
                          <img src={smiley} />
                        </div>
                        <div className="box_text">
                          <span className="counter_value">5000</span>
                          <span className="plus">+</span>
                          <p className="mb-0">Happy Users</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                      <div
                        className="box"
                        aos-init
                        aos-animate
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        <div className="box_icon">
                          <img src={smiley} />
                        </div>
                        <div className="box_text">
                          <span className="counter_value">5000</span>
                          <span className="plus">+</span>
                          <p className="mb-0">Happy Users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="adv_btn_block">
                  <p className="text-white text-start">
                    Free Delivery For Next Three Orders{" "}
                  </p>
                  <ul className="app-btn d-flex justify-content-left">
                    <li>
                      <Link to="/">
                        <img src={appStore} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={googlePlay} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="device">
              <img src={device} />
            </div>
          </div>
        </div>
        {/* <section className="py-5">
          <div className="container">
            <div className='row'>
              <div className='d-flex justify-content-between'>
                <div className='content_text'>
                  <div className='sub_title d-flex align-items-center'>
                    <span className="text-left ">FRESH VEGETABLES FROM FARM</span>
                  </div>
                  <div className='content_title pb-3'>
                    <h2 className="mb-4">Popular Categories</h2>
                  </div>
                </div>
              </div>

              <Swiper
                slidesPerView={1}
                direction="horizontal"
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ width: "100%", overflow: "hidden" }}
              >
                {vegetables.map((veg, index) => (
                  <SwiperSlide key={index} className="text-center">
                    <img
                      src={veg.image}
                      alt={veg.name}
                      className="veg-image"
                    />                 
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

       

        */}
      </div>
    </>
  );
};

export default HomePage;
