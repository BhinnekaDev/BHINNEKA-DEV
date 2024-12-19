import Image from "next/image";
import ptsp from "@/assets/images/PTSP.png";
import grainImage from "@/assets/images/grain.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// Data proyek portofolio
const portfolioProjects = [
  {
    company: "BMKG Bengkulu", // Nama perusahaan
    year: "2024", // Tahun proyek
    title: "PTSP BMKG Bengkulu", // Judul proyek
    results: [
      { title: "Enhanced user experience by 40%" }, // Peningkatan pengalaman pengguna
      { title: "Improved site speed by 50%" }, // Peningkatan kecepatan situs
      { title: "Increased mobile traffic by 35%" }, // Peningkatan lalu lintas mobile
    ],
    link: "https://ptsp-three.vercel.app/Beranda", // Tautan proyek
    image: ptsp, // Gambar proyek
  },
];

// Komponen utama untuk menampilkan bagian proyek
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      {/* Bagian: Header */}
      <div className="container">
        <div className="flex justify-center">
          {/* Teks heading dengan efek gradien */}
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            Real-World Result
          </p>
        </div>
        {/* Judul utama */}
        <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        {/* Deskripsi singkat */}
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          We transformed concepts into captivating digital experiences.
        </p>

        {/* Bagian: Daftar Proyek */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              {/* Efek background grain */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
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
                  <a href={project.link}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
