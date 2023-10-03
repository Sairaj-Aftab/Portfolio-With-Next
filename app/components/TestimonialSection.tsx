"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard";

const testi = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adip kjfkdsfj dkfjdlkfjsdklfj dskfjsdklfjsdkfj dkfjsdkfj dkfj kjdskfjsdkfjsdkl kdfjdsklfjdskfjdsk jkdfjdskfjisicing elit. Praesentium qui maiores alias, quod assumenda temporibus in rem illum repudiandae. Reprehenderit labore dolorum corrupti aspernatur quae nulla distinctio dignissimos odit, sit ipsum saepe id qui perferendis, totam esse cupiditate placeat porro impedit deserunt! Recusandae illo a maiores veniam nam enim libero.",
    name: "Marvin Jhonson",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis debitis sequi amet vel quasi. Nisi officiis iusto nihil quam ad laudantium asperiores nesciunt. Sapiente maxime modi recusandae, necessitatibus natus blanditiis!",
    name: "Smith Harsh",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dolore, mollitia aliquam suscipit, voluptatem, magnam sint fugit beatae corrupti harum dolorum? Asperiores ullam pariatur accusamus magni ducimus eos nostrum illo eveniet tempora ipsam aliquam voluptates, iste ratione nemo sapiente maxime error impedit sunt? Nesciunt, saepe!",
    name: "Kelly Barbon",
  },
  {
    id: 4,
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti debitis mollitia neque dolorum incidunt error doloribus tempora ut? Suscipit illum ut rem? Fuga dolorem est magnam aut, nihil qui fugit eum illo, nam ut reprehenderit voluptates esse alias voluptatem expedita eligendi consequatur autem sed iure pariatur error sit accusantium in! Quo, sequi? Necessitatibus cum ipsam at eos odio iure rerum.",
    name: "Tom Karban",
  },
  {
    id: 5,
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem reprehenderit cumque quod, asperiores consequuntur nesciunt inventore? Impedit, atque ad.",
    name: "Alexis",
  },
];

function TestimonialSection({
  head_title,
  title,
}: {
  head_title: string;
  title?: string;
}) {
  const swiperParams: any = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 350,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,

    loopedSlides: 2,
    pagination: { dynamicBullets: true },
    modules: [EffectCoverflow, Pagination],
  };

  return (
    <div id="Testimonial" data-aos="zoom-in" className="testimonial_section">
      <div className="text-center flex flex-col">
        <div className="head_text_parent">
          <h1 className="head_text">{head_title}</h1>
          <h1 className="head_text">{head_title}</h1>
        </div>
        <p className="title_text">{title}</p>
      </div>
      <div className="mx-5">
        <Swiper {...swiperParams}>
          {testi?.map((data, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                photo={data.photo}
                name={data.name}
                des={data.des}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialSection;
