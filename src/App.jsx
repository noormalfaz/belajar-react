import Navbar from "./components/navbar/Navbar.jsx";
import HeroSection from "./components/hero-section/HeroSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import Card from "./components/card/Card.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div className="mt-14 flex flex-wrap gap-5 justify-center">
        <Card
          name="Koreng"
          img="https://i.pinimg.com/originals/27/f6/42/27f6422618dccefd0de9e410f903ccf8.jpg"
          kebiasaan="Suka Tempur"
        />
        <Card
          name="Abu"
          img="https://cdn.pixabay.com/photo/2015/03/20/12/55/cat-682179_960_720.jpg"
          kebiasaan="Suka Tidur"
        />
        <Card
          name="Belang"
          img="https://asset.kompas.com/crops/HvD1S6HKgrEoJYYMiS-bNr-UrU8=/192x128:1728x1152/750x500/data/photo/2021/03/14/604dd50c6dc97.jpg"
          kebiasaan="Suka Maling"
        />
        <Card
          name="Putih"
          img="https://gerava.com/wp-content/uploads/2019/06/Kucing-Putih-Lucu.jpg"
          kebiasaan="Suka Makan"
        />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
