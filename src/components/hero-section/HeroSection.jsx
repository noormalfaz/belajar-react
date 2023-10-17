import fotoProfil from "./foto-profil.jpg";
import StyleFont from "./HeroSection.module.css";

import PropTypes from "prop-types";

function HeroSection(props) {
  return (
    <section className="h-screen w-screen fixed left-0 top-0 grid place-items-center z-[-10]">
      <div
        className={`${StyleFont.font} flex items-center justify-between gap-20 p-5`}
      >
        <div>
          <p className="text-xl leading-relaxed">
            Hi, nama saya <br />
            <span className="text-3xl font-bold">{props.name}.</span>
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

HeroSection.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeroSection;
