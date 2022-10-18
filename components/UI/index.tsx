import React from "react";
import { basePath, loadingGif, MenuItem } from "../Assets";
import About from "./About";
import PopupContainer from "./PopupContainer";
import PopupPage from "./PopupPage";
import { useSelector } from "react-redux";
import { IMainState } from "../../interfaces";
import Loading from "./Loading";
import { visitedCount } from "../Firebase/config";
import { FaHome, FaInfo, FaFortAwesome } from "react-icons/fa";
const UI = () => {
  const [state, setState] = React.useState({
    menu: undefined,
    url: undefined,
    visitCount: 0,
  });
  const isAllModelLoaded = useSelector(
    (state: IMainState) => state.clientState.isAllModelLoaded
  );
  React.useEffect(() => {
    visitedCount()
      .then((res) => {
        setState({ ...state, visitCount: res?.count });
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div className="ui-container">
        <div className="identity">
          <img
            src={loadingGif}
            alt=""
            draggable="false"
            className="gif-animation"
          />
          <div className="title">
            <div>
              <h2 style={{ marginBottom: "10px" }}>YOGESH BANGAR</h2>
            </div>

            <span style={{ fontWeight: "800" }}>FULL STACK WEB DEVELOPER</span>
          </div>
          <div className="social">
            <div className="social-icn">
              <a
                href="https://github.com/yogeshbangar"
                target="_blank"
                rel="noreferrer"
                title="Github profile"
              >
                <img
                  src="https://www.baladi.codes/github.png"
                  alt="Github profile"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-bangar-45632b18"
                target="_blank"
                rel="noreferrer"
                title="Linkedin profile"
              >
                <img
                  src="https://www.baladi.codes/linkedin.png"
                  alt="Linkedin profile"
                />
              </a>
              <a
                href="https://www.instagram.com/yogesh.bangar25/"
                target="_blank"
                rel="noreferrer"
                title="Instagram profile"
              >
                <img
                  src="https://www.baladi.codes/instagram.png"
                  alt="Instagram profile"
                />
              </a>
            </div>
            {state.visitCount ? (
              <div style={{ textAlign: "center" }}>{state.visitCount}</div>
            ) : null}
          </div>
        </div>
        <div className="detail">
          <div className="side-bar"></div>
          <ul id="menu" className="menu-ui">
            <li className="">
              <div
                className="menu-item"
                onClick={() => {
                  setState({ ...state, menu: undefined });
                }}
              >
                <FaHome />
                <span className="menu-title">HOME</span>
              </div>
            </li>
            <li className="">
              <div
                className="menu-item"
                onClick={() => {
                  setState({ ...state, menu: MenuItem.ABOUT });
                }}
              >
                <FaInfo />
                <span className="menu-title">About</span>
              </div>
            </li>
            <li className="">
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.EXPERTISE })}
              >
                <FaFortAwesome />
                <span className="menu-title">PROJECTS</span>
              </div>
            </li>
            <li className="" style={{ display: "none" }}>
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.CONTACT })}
              >
                <FaInfo />
                <span className="menu-title">CONTACT</span>
              </div>
            </li>
          </ul>
        </div>
        {state.menu === MenuItem.EXPERTISE && (
          <div className="identity footer">
            <img
              src={`${basePath}3D/tata.png`}
              className="img-game"
              onClick={() =>
                setState({ ...state, url: `${basePath}Games/TataSky` })
              }
            />
            <img
              src={`${basePath}3D/mutual.png`}
              className="img-game"
              onClick={() =>
                setState({ ...state, url: `${basePath}Games/MutualFunds` })
              }
            />
            <img
              src={`${basePath}3D/citi.png`}
              className="img-game"
              onClick={() =>
                setState({ ...state, url: `${basePath}Games/Cricket` })
              }
            />
            <img
              src={`${basePath}3D/champ.png`}
              className="img-game"
              onClick={() =>
                setState({ ...state, url: `${basePath}Games/AMFI_9` })
              }
            />
          </div>
        )}
      </div>
      {state.menu === MenuItem.ABOUT && (
        <PopupContainer
          maxWidth={"800px"}
          zIndex={100000}
          className="about-popup"
        >
          <About
            onClose={() => setState({ ...state, menu: undefined })}
            title={state.menu}
          />
        </PopupContainer>
      )}
      {state.url && (
        <PopupPage
          onClose={() => {
            setState({ ...state, url: undefined });
            console.log("~~~~~2~~~~~~~~~~");
          }}
          url={state.url}
        />
      )}
      {!isAllModelLoaded && <Loading />}
      <style jsx global>{`
        .menu-title {
          margin: 0 5px;
        }
        .footer {
          justify-content: center;
        }
        .img-game {
          width: 80px;
          height: auto;
          border-radius: 100px;
          margin: 0 5px;
        }
        .social {
          margin-left: auto;
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
        .ui-container {
          position: fixed;
          inset: 0px;
          z-index: 99;
          padding: 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          color: white;
          align-items: flex-start;
          animation: 0.4s linear 1s 1 normal backwards running blink;
          pointer-events: none;
        }
        .detail {
          height: 100%;
          width: 100%;
          display: flex;
        }
        .menu-ui {
          margin: 10px;
          padding: 10px;
          list-style: none;
          grid-area: 2 / 2 / auto / auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          -webkit-box-pack: center;
          justify-content: center;
          font-size: 14px;
          letter-spacing: 10px;
          font-weight: normal;
          gap: 40px;
          color: rgb(36, 36, 36);
          pointer-events: auto;
        }
        .side-bar {
          height: 100%;
          width: 40px;
          opacity: 0.5;
          grid-column: 1 / auto;
          filter: drop-shadow(rgb(255, 255, 255) 0px 0px 3px);
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgb(204, 204, 204) 8px,
            rgb(204, 204, 204) 15px
          );
        }
        .menu-ui li {
          position: relative;
          box-sizing: border-box;
          width: 200px;
          display: flex;
          filter: drop-shadow(rgb(255, 255, 255) 2px 0px 12px);
          outline: none;
        }
        .menu-ui li::before {
          content: "";
          position: absolute;
          inset: 0px;
          background-color: rgba(255, 255, 255, 0.5);
          clip-path: polygon(
            0px 0px,
            calc(100% - 10px) 0px,
            100% 10px,
            100% 100%,
            10px 100%,
            0px calc(100% - 10px),
            0px 0px
          );
          transition: background-color 0.2s ease-out 0s;
          pointer-events: none;
        }
        .menu-ui li::after {
          content: "";
          left: 15px;
          right: -4px;
          bottom: -4px;
          height: 15px;
          position: absolute;
          border-right: 1px solid rgba(255, 255, 255, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          border-image: initial;
          border-top: none;
          border-left: none;
          pointer-events: none;
        }
        .menu-ui li .menu-item {
          padding: 15px 0px 15px 20px;
          color: inherit;
          text-decoration: none;
          height: 100%;
          width: 100%;
          outline: none;
          position: relative;
          cursor: pointer;
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
        }
        .social-icn a img {
          width: 30px;
          height: 100%;
          object-fit: contain;
          margin: 10px;
        }
        @media (max-width: 576px) {
          .menu-title {
            display: none;
          }
          .menu-ui li {
            width: 60px;
          }
          .about-popup {
            padding-top: 80px !important;
          }
          .social {
            width: 50px;
          }
          .ui-container {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};
export default UI;
