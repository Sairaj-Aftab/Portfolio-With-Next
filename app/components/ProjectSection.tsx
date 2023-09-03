"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ProjectCard from "./ProjectCard";

function ProjectSection({ head_title }: { head_title: string }) {
  const swiperParams: any = {
    slidesPerView: 3,
    modules: [Pagination],
  };
  return (
    <div>
      <div className="text-center flex flex-col gap-16">
        <div className="head_text_parent">
          <h1 className="head_text">{head_title}</h1>
          <h1 className="head_text">{head_title}</h1>
        </div>
      </div>
      <div className="pt-20 px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSection;
