import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

const testimonials = [
  {
    name: "Mas Zahran",
    position: "-",
    text: "Bhinneka Dev has done a great job on the PTSP project. The system is simple and efficient, helping the community access weather updates, disaster alerts, and environmental info. Their hard work and focus on the project goals have created a reliable and useful solution for everyone.",
    avatar: memojiAvatar1,
  },
];

// Komponen utama untuk bagian Testimonial
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
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {/* Membuat daftar kartu testimonial dengan mapping data */}
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="max-w-xs md:max-w-md md:p-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};
