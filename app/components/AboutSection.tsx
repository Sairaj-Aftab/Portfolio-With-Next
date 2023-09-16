"use client";
import React from "react";

type props = {
  head_title: string;
};
function AboutSection({ head_title }: props) {
  return (
    <div id="About" data-aos="zoom-in" className="py-5 relative">
      <div className="flex flex-col gap-16">
        <div className="head_text_parent">
          <h1 className="head_text text-center">{head_title}</h1>
          <h1 className="head_text text-center">{head_title}</h1>
        </div>
        <div className="sm:flex gap-5 justify-between">
          <div className="flex-1">
            <div className="px-5 pt-5 text-justify">
              <p className="about-p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                numquam laudantium culpa rerum nemo explicabo labore nisi unde,
                error voluptatibus magnam ullam accusantium, et minus! Dolor
                optio exercitationem molestiae earum adipisci facere libero quam
                officia aspernatur illum reiciendis harum non, amet architecto,
                consequuntur ea atque praesentium sit dignissimos doloribus.
                Blanditiis harum beatae in, labore vitae veritatis itaque alias
                sapiente quas ullam dolores magni voluptatibus voluptate vel?
                Doloremque adipisci nostrum suscipit magni exercitationem quas
                quasi molestiae commodi voluptate explicabo similique, aperiam
                distinctio delectus at soluta! Corporis eveniet, illo at dicta
                quod laudantium tempora! Atque expedita est dignissimos autem
                earum possimus fuga ex ullam dicta! Nisi dolores ducimus
                architecto repellendus necessitatibus. Neque quaerat aliquam
                voluptate repellat harum illo quam minus, est reiciendis
                veritatis praesentium, quod omnis aliquid consequuntur dolorum
                voluptatem nobis odit quas fugit natus doloremque. Aut
                praesentium enim laborum eaque non. Culpa reprehenderit neque
                aliquam ducimus corrupti unde veritatis sapiente non.
              </p>
            </div>
          </div>
          {/* <div className="p-5 flex-1">
            <h2 className="text-center text-2xl font-bold">Skills</h2>
            <div className="skills flex gap-3 flex-wrap text-white font-semibold text-sm"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
