import React from "react";
import { basePath } from "../Assets";
import About from "./About";
import PopupContainer from "./PopupContainer";
import PopupPage from "./PopupPage";
import Loading from "./Loading";
import { FaHome, FaInfo, FaFortAwesome } from "react-icons/fa";
import { GiLevelThree } from "react-icons/gi";
import { SiEthereum } from "react-icons/si";
import Blockchain from "./Blockchain";
import { useIsAllModelLoadedState } from "../hooks";
import Header from "./Header";
import Link from "next/link";
import { MenuItem } from "../../interfaces";
const UI = () => {
  const [state, setState] = React.useState({
    menu: undefined as unknown as MenuItem | undefined,
    url: "",
  });
  const isAllModelLoaded = useIsAllModelLoadedState();

  return (
    <>
      <div className="ui-container">
        <Header />
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
                id="about-button"
                className="menu-item"
                onClick={() => {
                  setState({ ...state, menu: MenuItem.ABOUT });
                }}
              >
                <FaInfo />
                <span className="menu-title">ABOUT</span>
              </div>
            </li>
            <li className="">
              <div
                id="projects-button"
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.EXPERTISE })}
              >
                <FaFortAwesome />
                <span className="menu-title">PROJECTS</span>
              </div>
            </li>
            <li className="">
              <Link href="/games" style={{ width: "100%" }}>
                <div id="projects-button" className="menu-item">
                  <GiLevelThree />
                  <span className="menu-title">GameList</span>
                </div>
              </Link>
            </li>
            <li className="">
              <div
                id="crypto-button"
                className="menu-item"
                onClick={() =>
                  setState({ ...state, menu: MenuItem.SEND_CRYPTO })
                }
              >
                <SiEthereum />
                <span className="menu-title">CRYPTO</span>
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
            setState({ ...state, url: "" });
          }}
          url={state.url}
        />
      )}
      {state.menu === MenuItem.SEND_CRYPTO && (
        <PopupContainer
          maxWidth={"800px"}
          zIndex={100000}
          className="send-crypto"
        >
          <Blockchain onClose={() => setState({ ...state, menu: undefined })} />
        </PopupContainer>
      )}

      {!isAllModelLoaded && <Loading />}
      <style jsx global>{`
        .menu-title {
          margin: 0 5px;
        }
        .footer {
          justify-content: center;
          animation-name: example;
          animation-duration: 0.2s;
        }
        @keyframes example {
          from {
            opacity: 0;
            transform: scale(0.5) translate(-100%, -100%);
          }
          to {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
        }
        .img-game {
          width: 80px;
          height: auto;
          border-radius: 100px;
          margin: 0 5px;
        }

        .identity {
          display: flex;
          max-height: 100px;
          width: 100%;
          pointer-events: auto;
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
          letter-spacing: 6px;
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
          .ui-container {
            padding: 0px;
          }
          .side-bar {
            display: none;
          }
          .about-popup .content-container {
            width: unset !important;
          }
        }
      `}</style>
    </>
  );
};
export default UI;
