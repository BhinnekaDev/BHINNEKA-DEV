import Image from "next/image";
import { Card } from "@/components/Card";
import fsi from "@/assets/images/FSI.png";
import ptsp from "@/assets/images/PTSP.png";
import simore from "@/assets/images/SIMORE.png";
import ptspAdmin from "@/assets/images/PTSP-ADMIN.png";
import { SectionHeader } from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "BMKG Bengkulu",
    year: "2024",
    title: "PTSP BMKG Bengkulu",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Reduced bounce rate by 25%" },
    ],
    link: "https://ptsp-three.vercel.app/Beranda",
    image: ptsp,
  },
  {
    company: "BMKG Bengkulu",
    year: "2024",
    title: "PTSP BMKG Admin Bengkulu",
    results: [
      { title: "Optimized admin dashboard for faster navigation" },
      { title: "Improved data accuracy by 30%" },
      { title: "Increased mobile responsiveness by 50%" },
    ],
    link: "https://ptsp-bmkg-admin-wx106uwvv-naufal-fifas-projects.vercel.app/",
    image: ptspAdmin,
  },
  {
    company: "Basarnas Bengkulu",
    year: "2024",
    title: "SIMORE",
    results: [
      { title: "Improved user interface leading to faster response time" },
      { title: "Reduced page load time by 60%" },
      { title: "Enhanced mobile usability for easier navigation" },
    ],
    link: "https://basarnas.my.id/",
    image: simore,
  },
  {
    company: "UNJANI Faculty of Science and Informatics",
    year: "2024",
    title: "FSI",
    results: [
      {
        title: "Improved website design resulting in better student engagement",
      },
      { title: "Optimized website for higher mobile traffic by 45%" },
      { title: "Reduced server response time by 40%" },
    ],
    link: "https://fsi.unjani.ac.id/",
    image: fsi,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        {/* Bagian: Header */}
        <SectionHeader
          title="  Real-World Result"
          eyebrow="Featured Projects"
          description="We transformed concepts into captivating digital experiences."
        />

        {/* Bagian: Daftar Proyek */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Bagian Kiri: Informasi proyek */}
                <div className="lg:pb-16">
                  {/* Informasi perusahaan dan tahun */}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span> {/* Nama perusahaan */}
                    <span>&bull;</span> {/* Tanda titik */}
                    <span>{project.year}</span> {/* Tahun proyek */}
                  </div>

                  {/* Judul proyek */}
                  <h3 className="font-calistoga text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  {/* Garis pemisah */}
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  {/* Daftar hasil proyek */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {/* Ikon check */}
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tombol tautan ke situs langsung */}
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                {/* Bagian Kanan: Gambar proyek */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
