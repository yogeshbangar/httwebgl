import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { loadingGif } from "../Assets";
import { visitedCount } from "../Firebase/config";

const Header = () => {
  const [state, setState] = React.useState({
    visitCount: 0,
  });
  React.useEffect(() => {
    visitedCount()
      .then((res) => {
        setState({ ...state, visitCount: res?.count });
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="identity">
      <Image
        src={loadingGif}
        alt=""
        draggable="false"
        className="gif-animation"
        width={100}
        height={100}
      />
      <div className="title">
        <Link href="/">
          <h2 style={{ marginBottom: "10px" }}>YOGESH BANGAR</h2>
        <span style={{ fontWeight: "800" }}>FULL STACK WEB DEVELOPER</span>
        </Link>
      </div>
      <div className="social">
        <div className="social-icn">
          <a
            href="https://github.com/yogeshbangar"
            target="_blank"
            rel="noreferrer"
            title="Github profile"
          >
            <FaGithubSquare size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-bangar-45632b18"
            target="_blank"
            rel="noreferrer"
            title="Linkedin profile"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/yogesh.bangar25/"
            target="_blank"
            rel="noreferrer"
            title="Instagram profile"
          >
            <FaInstagramSquare size={40} />
          </a>
        </div>
        {state.visitCount ? (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {state.visitCount}
          </div>
        ) : null}
      </div>
      <style>{`
        .identity {
            display: flex;
            max-height: 100px;
            width: 100%;
            pointer-events: auto;
        }
        .gif-animation {
            width: auto;
            max-height: 100px;
          }
          .title {
            margin-left: 10px;
            text-shadow: 0 0 1.1em #fff, 0 0 1.2em #fff;
            animation: title-anim;
            animation-duration: 0.1s;
          }
          @keyframes title-anim {
            from {
              transform: translateX(-400px);
            }
            to {
              transform: translateX(0px);
            }
          }
          .social {
            margin-left: auto;
          }
  
          .social-icn a {
            cursor: pointer;
            border-bottom: 1px solid rgb(165, 165, 165);
            border-left: 1px solid rgb(165, 165, 165);
            border-image: initial;
            border-right: none;
            border-top: none;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            position: relative;
            filter: drop-shadow(rgb(255, 255, 255) 0px 0px 5px);
            opacity: 0.6;
            animation: 0.4s linear 2s 1 normal backwards running blink;
            transition: opacity 0.2s ease 0s;
            padding: 4px;
          }
          .social-icn a img {
            width: 30px;
            height: 100%;
            object-fit: contain;
            margin: 10px;
          }
          @media (max-width: 576px) {
            .social {
              width: 50px;
              display:none;
            }
          }
        `}</style>
    </div>
  );
};

export default Header;
