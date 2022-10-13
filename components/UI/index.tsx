import React from "react";
import { MenuItem } from "../Assets";
import Popup from "./Popup";

const UI = () => {
  const [state, setState] = React.useState({ menu: undefined });
  return (
    <>
      <div className="ui-container">
        <div className="identity">
          <img
            src="https://www.baladi.codes/tarbouch.min.gif"
            alt=""
            draggable="false"
            className="gif-animation"
          />
          <div className="title">
            <div>
              <h2>YOGESH BANGAR</h2>
            </div>
            <h3>FULL STACK WEB DEVELOPER</h3>
          </div>
          <div className="social">
            <div className="social-icn">
              <a
                href="https://github.com/medamine7"
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
                href="https://www.linkedin.com/in/mohamed-amine-baladi-0aa7a4167"
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
                href="https://www.instagram.com/_mab7/"
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
          </div>
        </div>
        <div className="detail">
          <div className="side-bar"></div>
          <ul id="menu" className="menu-ui">
            <li className="">
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.HOME })}
              >
                HOME
              </div>
            </li>
            <li
              className="active"
              onClick={() => setState({ ...state, menu: MenuItem.ABOUT })}
            >
              <div className="menu-item">ABOUT</div>
            </li>
            <li className="">
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.CAREER })}
              >
                CAREER
              </div>
            </li>
            <li className="">
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.EXPERTISE })}
              >
                EXPERTISE
              </div>
            </li>
            <li className="">
              <div
                className="menu-item"
                onClick={() => setState({ ...state, menu: MenuItem.CONTACT })}
              >
                CONTACT
              </div>
            </li>
          </ul>
          {state.menu && (
            <Popup
              onClose={() => setState({ ...state, menu: undefined })}
              title={state.menu}
            />
          )}
        </div>
      </div>

      <style jsx global>{`
        .social {
          margin-left: auto;
        }
        .title {
          margin-left: 10px;
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
      `}</style>
    </>
  );
};
export default UI;
