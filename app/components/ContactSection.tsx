"use client";
import React, { useState } from "react";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

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
  const [input, setInput] = useState<input>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(input);
  };

  return (
    <div id="Contact" className="py-5">
      <div className="flex flex-col gap-16">
        <div className="head_text_parent">
          <h1 className="head_text text-center">{head_title}</h1>
          <h1 className="head_text text-center">{head_title}</h1>
        </div>
        <div className="md:flex justify-between gap-5 px-5 mt-10">
          <form
            onSubmit={submitEmail}
            className="contact flex-1 flex flex-col gap-3"
          >
            <h2 className="title_text">{title2}</h2>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={changeValue}
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={changeValue}
              placeholder="Enter your email"
            />
            <input
              type="text"
              name="subject"
              value={input.subject}
              onChange={changeValue}
              placeholder="Enter your subject"
            />
            <textarea
              rows={7}
              name="message"
              value={input.message}
              onChange={changeMsgValue}
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="btn text-lg font-semibold">
              Send Mail
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {/* Email */}
            <div className="bg_card flex items-center gap-5 p-5 rounded-md">
              <div className="text-3xl">
                <BiEnvelope />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">Email</h3>
                {email?.map((email: string, index) => (
                  <p
                    key={index}
                    className="text-slate-300 text-sm font-semibold"
                  >
                    {email}
                  </p>
                ))}
              </div>
              <a href="https://wa.me/01881591572" target="_blank">
                WhatsApp
              </a>
            </div>
            {/* WhatsApp */}
            {/* <div className="bg_card flex items-center gap-5 p-5 rounded-md">
              <div className="text-3xl">
                <BsWhatsapp />
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-1">
                  WhatsApp
                </h3>
                {whatsApp?.map((phone: string, index: number) => (
                  <p
                    key={index}
                    className="text-slate-300 text-sm font-semibold"
                  >
                    {phone}
                  </p>
                ))}
              </div>
            </div> */}
            {/* Google Map */}
            <div className="bg_card flex flex-col gap-2 p-5 rounded-md">
              <div className="flex items-center gap-5">
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
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
