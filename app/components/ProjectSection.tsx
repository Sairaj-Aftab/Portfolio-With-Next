"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import ProjectCard from "./ProjectCard";
import projects from "@/data/projects";

function ProjectSection({ head_title }: { head_title: string }) {
  const swiperParams: any = {
    slidesPerView: 3,
    modules: [Pagination],
  };
  return (
    <div id="Projects" className="bg-[#011627]">
      <div className="text-center flex flex-col">
        <div className="head_text_parent">
          <h1 className="head_text">{head_title}</h1>
          <h1 className="head_text">{head_title}</h1>
        </div>
      </div>
      <div className="pt-4 md:pt-5 sm:px-5">
        <Swiper
          className="swiper-project"
          slidesPerView={1}
          spaceBetween={15}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          speed={1000}
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
        >
          {projects.map((data, index) => (
            <SwiperSlide>
              <ProjectCard
                banner={data.banner}
                title={data.title}
                tools={data.tools}
                liveLink={data.liveLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSection;
