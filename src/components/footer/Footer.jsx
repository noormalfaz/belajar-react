import StyleFont from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={`${StyleFont.font} mt-20 p-2.5 border-t text-center`}>
        <span>by n m a.</span>
      </div>
    </footer>
  );
}

export default Footer;
