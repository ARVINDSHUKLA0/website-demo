"use client";

import React from "react";
import "../componentStyle/Banner.css";
import Slider from "react-slick";

const Banner = () => {

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="next-arrow" onClick={onClick}>
                <i className="fa-solid fa-arrow-left"></i>
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="prev-arrow" onClick={onClick}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const BannerArr = [
        { id: 1, BannerImg: "/assets/img/one.jpg" },
        { id: 2, BannerImg: "/assets/img/two.jpg" },
        { id: 3, BannerImg: "/assets/img/three.jpg" },
        { id: 4, BannerImg: "/assets/img/four.jpg" },
    ];

    return (
        <section className="banner-section">
            <div className="row m-0">
                <div className="col-lg-12 p-0">
                    <Slider {...settings}>
                        {BannerArr.map((item) => (
                            <div key={item.id}>
                                <div className="banner-item">
                                    <img
                                        src={item.BannerImg}
                                        alt="banner"
                                        className="banner-img"
                                    />
                                </div>

                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        </section>
    );
};

export default Banner;