import StyleFont from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        className={`${StyleFont.font} flex justify-between p-5 text-xl font-semibold`}
      >
        <div>
          <ul className="flex gap-5 ">
            <li className="hover:text-sky-700 hover:border-b hover:border-b-sky-700">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-sky-700 hover:border-b hover:border-b-sky-700">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-sky-700 hover:border-b hover:border-b-sky-700">
              <Link to="/keterampilan">Keterampilan</Link>
            </li>
            <li className="hover:text-sky-700 hover:border-b hover:border-b-sky-700">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="hover:text-sky-700">
              <a
                href="https://github.com/noormalfaz"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </li>
            <li className="hover:text-sky-700">
              <a
                href="https://www.linkedin.com/in/noor-mohamad-alfaz-3773b2277/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </li>
            <li className="hover:text-sky-700">
              <a
                href="https://www.instagram.com/nrmalfazzz_/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
