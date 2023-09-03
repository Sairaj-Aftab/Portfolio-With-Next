import Image from "next/image";
import React from "react";

function TestimonialCard({
  photo,
  name,
  des,
}: {
  photo: string;
  name: string;
  des: string;
}) {
  return (
    <div className="bg_card border h-[280px] flex flex-col justify-between items-center p-3 rounded-3xl relative">
      <div className="absolute -top-14 left-0 right-0 w-full flex justify-center z-40">
        <Image
          className="w-32 h-32 object-cover rounded-full"
          src={photo}
          alt={name}
          width={500}
          height={500}
        />
      </div>
      <p className="text-sm font-normal leading-6 mt-16 line-clamp-6">
        {des.length >= 500 ? `${des.substring(0, 250)}` : des}
        {des.length >= 500 ? (
          <button className="text-green-600 text-sm font-extrabold bg-slate-600 ml-2 rounded-md px-1">
            More...
          </button>
        ) : (
          ""
        )}
      </p>
      <h5 className="text-lg font-semibold italic text-[var(--primary-color)]">
        {name}
      </h5>
    </div>
  );
}

export default TestimonialCard;
