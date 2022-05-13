/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Services.css";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { ImTumblr2 } from "@react-icons/all-files/im/ImTumblr2";
import { SiDatadog } from "@react-icons/all-files/si/SiDatadog";

const Services = () => {
  return (
    <div className="hero__services">
      <a
        href="https://github.com/kybikchidori1"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
      <a href="https://vk.com/id617282226" target="_blank" rel="noreferrer">
        <ImTumblr2 />
      </a>
      <a
        href="https://romanyukhlin.tumblr.com/"
        target="_blank"
        rel="noreferrer"
      >
        <SiDatadog />
      </a>
    </div>
  );
};

export default Services;
