import Image from "next/image";
import { Fragment } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Zahran Aslam Rizqullah, S.Tr.Inst",
    position: "Employee at the Climatology Station, BMKG, Bengkulu Province",
    text: "Bhinneka Dev has done an excellent job on the PTSP project. The system is simple yet effective, enabling the community to access weather updates, disaster warnings, and environmental information. Their dedication and focus on the project goals have resulted in a reliable and valuable solution for everyone.",
    avatar: memojiAvatar1,
  },
  {
    name: "Muslikun Sodik, S.K.M",
    position: "Head of the Class B Search and Rescue Office, Bengkulu",
    text: "Bhinneka Dev has done an outstanding job on the Simore project. The system is efficient and user-friendly, providing the community with access to weather information, disaster alerts, and environmental updates. Their commitment and attention to project goals have led to a dependable and useful solution for all.",
    avatar: memojiAvatar2,
  },
  {
    name: "Agus Komarudin, S.Kom., M.T",
    position: "Vice Dean 3 of the Faculty of Science and Informatics, UNJANI",
    text: "Bhinneka Dev has done an exceptional job on the FSI Website project. The system is intuitive and efficient, helping the community access weather updates, disaster alerts, and environmental data. Their focus and effort on the project have created a reliable and valuable solution.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      {/* Bagian header untuk judul dan deskripsi */}
      <div className="container">
        <SectionHeader
          title="Happy Clients" // Judul utama bagian
          eyebrow="What Clients Say About Us" // Subjudul
          description="Don't just take our word for it. See what our clients have to say about our work." // Deskripsi
        />

        {/* Bagian konten testimonial */}
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          {/* Membuat daftar kartu testimonial dengan mapping data */}
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] cursor-pointer">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    {/* Bagian avatar dan informasi klien */}
                    <div className="flex gap-4 items-center">
                      {/* Avatar klien */}
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar} // Gambar avatar dari data testimonial
                          alt={testimonial.name} // Alternatif teks untuk aksesibilitas
                          className="max-h-full"
                        />
                      </div>
                      {/* Nama dan posisi klien */}
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    {/* Teks testimoni */}
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
