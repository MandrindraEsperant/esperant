import "./style.css";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import Image from "next/image";
import myImage from "./home.png";
export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="logo">
          Espérant.
        </a>
        <ul>
          <li className="active">
            <a href="#">Homme</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Porfolio</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="bars-animation">
        <div className="bar" style={{ "--i": 6 } as React.CSSProperties}></div>
        <div className="bar" style={{ "--i": 5 } as React.CSSProperties}></div>
        <div className="bar" style={{ "--i": 4 } as React.CSSProperties}></div>
        <div className="bar" style={{ "--i": 3 } as React.CSSProperties}></div>
        <div className="bar" style={{ "--i": 2 } as React.CSSProperties}></div>
        <div className="bar" style={{ "--i": 1 } as React.CSSProperties}></div>
      </div>
      <section className="home">
        <div className="home-info">
          <h1>Mandrindra Espérant </h1>
          <h2>
            I&apos;m a &nbsp;
            <span
              style={{ "--a": 2 } as React.CSSProperties}
              data-text="FullStack Developer"
            >
              FullStack Developer
            </span>
            <span
              style={{ "--a": 1 } as React.CSSProperties}
              data-text="Software Architect"
            >
              {" "}
              Software Architect
            </span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            saepe nemo expedita eos similique excepturi officiis ad sit debitis
            voluptas velit veniam quibusdam temporibus, provident officia
            reprehenderit, repellendus ea non.
          </p>
          <div className="btn-sci">
            <a href="#" className="btn">
              Download CV
            </a>
            <div className="sci">
              <a href="https://github.com/MandrindraEsperant/">
                <i>
                  {" "}
                  <BiLogoGithub size={24} />
                </i>
              </a>
              <a href="#">
                <i>
                  <BiLogoLinkedin size={24} />
                </i>
              </a>
              <a href="#">
                <i>
                  {" "}
                  <BiLogoTwitter size={24} />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <Image src={myImage} alt="Description de l'image" />
            </div>
          </div>
        </div>
      </section>
      {/* <PresentationCard /> */}
    </div>
  );
}
