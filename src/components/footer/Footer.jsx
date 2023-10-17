import StyleFont from "./Footer.module.css";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen">
      <div className={`${StyleFont.font} p-5 border-t text-center`}>
        <span>by n m a.</span>
      </div>
    </footer>
  );
}

export default Footer;
