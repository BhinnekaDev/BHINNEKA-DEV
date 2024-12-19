export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        {/* Teks heading dengan efek gradien */}
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          {title}
        </p>
      </div>
      {/* Judul utama */}
      <h2 className="font-calistoga text-3xl md:text-5xl text-center mt-6">
        {eyebrow}
      </h2>
      {/* Deskripsi singkat */}
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
