"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { BiMap } from "react-icons/bi";
import whatsapp from "../../public/whatsapp.png";
import skype from "../../public/skype.png";
import instagram from "../../public/instagram.png";
import toast from "react-hot-toast";

type props = {
  head_title: string;
  title?: string;
  title2: string;
  email: string[];
  whatsApp: string[];
  address: string;
};

type input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactSection({
  head_title,
  title,
  title2,
  email,
  whatsApp,
  address,
}: props) {
  const [state, handleSubmit] = useForm("mknlpkda");

  const [input, setInput] = useState<input>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  if (state.succeeded) {
    // toast.success("Thanks for joining!");
    toast("Thanks for joining!", {
      duration: 5000,
      icon: "👏",
    });
  }
  if (state.errors) {
    toast.error("This didn't work.");
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id="Contact" className="py-5">
      <div className="flex flex-col gap-5">
        <div className="head_text_parent">
          <h1 className="head_text text-center">{head_title}</h1>
          <h1 className="head_text text-center">{head_title}</h1>
        </div>
        <div className="md:flex justify-between gap-5 px-5">
          <form
            onSubmit={handleSubmit}
            className="contact flex-1 flex flex-col gap-3"
          >
            <h2 className="title_text">{title2}</h2>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={changeValue}
              placeholder="Enter your name"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              value={input.email}
              onChange={changeValue}
              placeholder="Enter your email"
              required
            />
            <input
              type="text"
              name="subject"
              value={input.subject}
              onChange={changeValue}
              placeholder="Enter your subject"
              required
            />
            <textarea
              id="message"
              rows={7}
              name="message"
              value={input.message}
              onChange={changeMsgValue}
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn text-lg font-semibold">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5 mt-2 md:mt-0">
            {/* Google Map */}
            <div className="bg_card flex flex-col gap-2 rounded-md">
              <div className="flex items-center gap-5 px-3 pt-3 sm:px-5 sm:pt-5">
                <div className="text-3xl">
                  <BiMap />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">
                    Address
                  </h3>
                  <p className="text-slate-300 text-sm font-semibold">
                    {address}
                  </p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.72124492792!2d91.91866835700449!3d21.450458662456036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1694633233329!5m2!1sen!2sbd"
                width="100%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex justify-evenly items-center py-3">
                <a href="https://wa.me/+8801881591572" target="_blank">
                  <Image src={whatsapp} alt="" className="w-10" />
                </a>
                <a href="skype:live:.cid.fac999e34c963405?chat" target="_blank">
                  <Image src={skype} alt="" className="w-10" />
                </a>
                <a href="https://ig.me/m/sairaj_aftab" target="_blank">
                  <Image src={instagram} alt="" className="w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5">
          <ul className="bg_card md:flex justify-center gap-5 items-center w-[100%] py-2 px-2 md:px-0">
            <li>
              <a href="#" className="text-lg font-normal text-white">
                <span className="font-semibold">Email :</span>{" "}
                sairajaftab@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-normal text-white">
                <span className="font-semibold">Phone :</span> +8801881591572
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
