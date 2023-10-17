import fotoProfil from "./foto-profil.jpg";
import StyleFont from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section>
      <div
        className={`${StyleFont.font} flex items-center justify-center gap-20 mt-20`}
      >
        <div>
          <p className="text-xl leading-relaxed">
            Hi, nama saya <br />
            <span className="text-3xl font-bold">Noor Mohamad Alfaz.</span>
            <br /> Saya adalah seorang mahasiswa dari Universitas Bina Sarana
            Informatika.
            <br /> Saya suka mempelajari hal-hal baru dan juga tertarik untuk
            <br /> memperluas pengetahuan saya dalam pemrograman.
          </p>
        </div>
        <div>
          <img
            src={fotoProfil}
            alt="Foto Profil"
            className="rounded-full w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
