"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { img: "/assets/images/icons/01.svg", name: "Building Materials" },
  { img: "/assets/images/icons/02.svg", name: "Construction Tools" },
  { img: "/assets/images/icons/03.svg", name: "Heavy Equipment" },
  { img: "/assets/images/icons/04.svg", name: "Electrical Materials" },
  { img: "/assets/images/icons/05.svg", name: "Plumbing Supplies" },
  { img: "/assets/images/icons/06.svg", name: "Wood & Lumber" },
  { img: "/assets/images/icons/07.svg", name: "Safety Equipment" },
  { img: "/assets/images/icons/08.svg", name: "Roofing Materials" },
  { img: "/assets/images/icons/09.svg", name: "Insulation & Flooring" },
  { img: "/assets/images/icons/10.svg", name: "Hardware & Fasteners" },
  { img: "/assets/images/icons/01.svg", name: "Building Materials" },
];

function CategoryBannerBottom() {
  return (
    <div className="rts-caregory-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="category-area-main-wrapper-one">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={12}
                slidesPerView={10}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 12 },
                  320: { slidesPerView: 2, spaceBetween: 12 },
                  480: { slidesPerView: 3, spaceBetween: 12 },
                  640: { slidesPerView: 4, spaceBetween: 12 },
                  840: { slidesPerView: 4, spaceBetween: 12 },
                  1140: { slidesPerView: 10, spaceBetween: 12 },
                }}
              >
                {categories.map((cat, idx) => (
                  <SwiperSlide key={idx}>
                    <Link href="/shop-grid-sidebar" className="single-category-one">
                      <Image
                        src={cat.img}
                        alt={cat.name}
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                      <p>{cat.name}</p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBannerBottom;
