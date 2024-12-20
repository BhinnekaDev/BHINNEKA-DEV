"use client";
import React, { useState } from "react";
import Slider from "react-slick"; // Import Slider untuk carousel gambar
import Image from "next/image"; // Import Image untuk menampilkan gambar

// Mengimpor gambar yang akan digunakan dalam carousel
import Naufal from "@/assets/images/Naufal.png";
import Rezki from "@/assets/images/Rezki.png";
import Ahsan from "@/assets/images/Ahsan.png";
import Gibran from "@/assets/images/Gibran.png";
import Sandro from "@/assets/images/Sandro.png";
import Adrian from "@/assets/images/Adrian.png";
import Nugrah from "@/assets/images/Nugrah.png";
import Fitri from "@/assets/images/Fitri.png";
import Hengki from "@/assets/images/Hengki.png";
import Eyca from "@/assets/images/eyca.png";
import Marco from "@/assets/images/marco.png";
import ArrowDown from "@/assets/icons/arrow-down.svg"; // Ikon untuk tombol panah bawah
import grainImage from "@/assets/images/grain.jpg"; // Gambar untuk latar belakang
import StarIcon from "@/assets/icons/star.svg"; // Ikon untuk bintang
import { HeroOrbit } from "@/components/HeroOrbit"; // Komponen orbit
import SparkleIcon from "@/assets/icons/sparkle.svg";

// Array yang menyimpan informasi gambar
const images = [
  { src: Naufal, alt: "Naufal" },
  { src: Rezki, alt: "Rezki" },
  { src: Ahsan, alt: "Ahsan" },
  { src: Gibran, alt: "Gibran" },
  { src: Sandro, alt: "Sandro" },
  { src: Adrian, alt: "Adrian" },
  { src: Nugrah, alt: "Nugrah" },
  { src: Fitri, alt: "Fitri" },
  { src: Hengki, alt: "Hengki" },
  { src: Eyca, alt: "Eyca" },
  { src: Marco, alt: "Marco" },
];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Melacak gambar aktif

  // Pengaturan slider
  const settings = {
    dots: true, // Menampilkan titik navigasi
    infinite: true, // Loop tak terbatas
    speed: 500, // Kecepatan transisi
    autoplay: true, // Autoplay aktif
    autoplaySpeed: 3000, // Kecepatan autoplay
    arrows: false, // Menonaktifkan panah navigasi
    fade: true, // Efek transisi fade
    cssEase: "ease-in-out", // Efek easing
    pauseOnHover: true, // Jeda autoplay saat hover
    draggable: true, // Memungkinkan menarik slider
    swipe: true, // Memungkinkan geser
    afterChange: (current: number) => setActiveIndex(current), // Memperbarui index aktif
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === activeIndex ? "bg-blue-500" : "bg-white"
        }`}
      />
    ),
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Latar belakang */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* Cincin */}
        <div className="size-[1200px] hero-ring" />
        <div className="size-[1400px] hero-ring" />
        <div className="size-[1600px] hero-ring" />
        <div className="size-[1800px] hero-ring" />

        {/* Orbit */}
        <HeroOrbit
          size={840}
          rotation={-5}
          shouldOrbit
          orbitDuratiton="30s"
          shouldSpin
          spinDuratiton="30s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={870}
          rotation={85}
          shouldOrbit
          orbitDuratiton="34s"
          shouldSpin
          spinDuratiton="34s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={900}
          rotation={-72}
          shouldOrbit
          orbitDuratiton="38s"
          shouldSpin
          spinDuratiton="38s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={1000}
          rotation={20}
          shouldOrbit
          orbitDuratiton="40s"
          shouldSpin
          spinDuratiton="40s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={1000}
          rotation={144}
          shouldOrbit
          orbitDuratiton="42s"
          shouldSpin
          spinDuratiton="42s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={1120} rotation={-41} shouldOrbit orbitDuratiton="44s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1130}
          rotation={98}
          shouldOrbit
          orbitDuratiton="46s"
          shouldSpin
          spinDuratiton="4s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={1130}
          rotation={-14}
          shouldOrbit
          orbitDuratiton="48s"
          shouldSpin
          spinDuratiton="5s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1130}
          rotation={79}
          shouldOrbit
          orbitDuratiton="50s"
          shouldSpin
          spinDuratiton="5s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={1280}
          rotation={178}
          shouldOrbit
          orbitDuratiton="52s"
          shouldSpin
          spinDuratiton="6s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
      </div>

      <div className="container">
        {/* Bagian Carousel Gambar */}
        <div className="flex flex-col items-center relative">
          <Slider {...settings} className="w-full max-w-md cursor-grab">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                {/* Menampilkan gambar dengan efek hover */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg w-full transition-transform transform group-hover:scale-105"
                  width={400}
                  height={400}
                  priority
                />
                {/* Overlay untuk efek hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </Slider>

          {/* Tag Ketersediaan */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-2 rounded-lg mt-6">
            <div className="bg-green-500 w-3 h-3 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        {/* Judul dan Deskripsi */}
        <div className="max-w-lg mx-auto text-center mt-10">
          <h1 className="font-calistoga text-3xl md:text-5xl tracking-wide">
            Crafting Exceptional User Experiences with Bhinneka Dev
          </h1>
          <p className="mt-4 text-white/70 md:text-lg">
            At Bhinneka Dev, we specialize in creating innovative, user-centered
            interfaces that captivate and engage. Our designs empower users and
            drive your business success.
          </p>
        </div>

        {/* Tombol */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4">
          {/* Tombol Eksplorasi */}
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:text-gray-900 transition">
            <span className="font-semibold">Explore Our Work</span>
            <ArrowDown className="w-5 h-5" />
          </button>
          {/* Tombol Hubungi Kami */}
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-gray-100 transition">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
