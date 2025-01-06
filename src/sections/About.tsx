"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import CSSIcon from "@/assets/icons/css3.svg";
import mapImage from "@/assets/images/map.png";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxtems";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import { SectionHeader } from "@/components/SectionHeader";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolBoxItems = [
  {
    title: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CSSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Coding",
    emoji: "🖥️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "35%",
    top: "40%",
  },
  {
    title: "Travel",
    emoji: "🌍",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🍽️",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="about" className="py-20 lg:py-28">
      {/* Bagian header */}
      <div className="container">
        {/* Header bagian dengan judul, eyebrow, dan deskripsi */}
        <SectionHeader
          title="About Us"
          eyebrow="A Glimpse of Our Story"
          description="Learn more about our company and what inspired us to create Bhinneka Dev."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Bagian kotak alat */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-5">
              <CardHeader
                title="Our Toolbox"
                description="Explore the technologies and tools we used to craft exceptional
                digital experiences."
              />
              {/* Menampilkan item Toolbox */}
              <ToolBoxItems
                items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          {/* Bagian hobi dan peta */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Kartu untuk menampilkan hobi */}
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore our interests and hobbies outside the digital world."
                classname="p-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {/* Iterasi untuk menampilkan daftar hobi */}
                {hobbies.map((item, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Kartu untuk menampilkan peta dengan memoji */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              {/* Gambar peta sebagai latar belakang */}
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              {/* Memoji smile di tengah lingkaran */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={smileMemoji}
                  alt="memoji"
                  className="size-20 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
