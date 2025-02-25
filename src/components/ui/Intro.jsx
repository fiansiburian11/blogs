"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";
import { PiTiktokLogo } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import AOS from "aos";

export default function Intro() {
  const sosmed = [
    {
      id: 1,
      url: "https://www.instagram.com/fiansiburian_/",
      icon: <PiInstagramLogoDuotone size={20} className="text-slate-400" />,
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/firman-parulian-siburian-4416832b3/",
      icon: <TbBrandLinkedin size={20} className="text-slate-400" />,
    },
    {
      id: 3,
      url: "https://www.tiktok.com/@fiandev11?is_from_webapp=1&sender_device=pc",
      icon: <PiTiktokLogo size={20} className="text-slate-400" />,
    },
    {
      id: 4,
      url: "https://github.com/fiansiburian11",
      icon: <LuGithub size={20} className="text-slate-400" />,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <section className="w-1/2 mt-20">
        <div data-aos="zoom-in">
          <Image src="/images/logo.PNG" alt="" width={30} height={30} />
          <h1 className="font-bold text-white text-lg mt-5 sm:text-xs md:text-2xl lg:text-4xl">Front End Developer, Designer and Content Creator</h1>
          <p className="text-slate-400 text-[8px] md:text-md lg:text-base  mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis non quaerat voluptatum voluptatibus quis sequi suscipit, provident facere autem exercitationem!
          </p>
        </div>
        <span data-aos="fade-down" className="flex gap-3 mt-5">
          {sosmed.map((item) => (
            <Link key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </Link>
          ))}
        </span>
      </section>
    </div>
  );
}
