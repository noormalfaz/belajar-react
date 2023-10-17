import Layout from "../components/layout/Layout.jsx";
import HeroSection from "../components/hero-section/HeroSection.jsx";

function HomePage() {
  const name = "Noor Mohamad Alfaz";

  return (
    <Layout>
      <HeroSection name={name} />
    </Layout>
  );
}

export default HomePage;
