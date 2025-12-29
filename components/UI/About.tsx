const About = ({ onClose, title }: { onClose: () => void; title: string }) => {
  return (
    <>
      <div className="sc-ieecCq gCPXug">
        <div className="sc-bdvvtL IJwLM open-appear-done open-enter-done">
          <div className="close" onClick={onClose}>
            <span style={{ marginLeft: "6px" }}>x</span>
          </div>
          <div className="sc-gsDKAQ gAWZmv window-content">
            <div className="sc-hKwDye edvhnN">
              <h1 style={{ marginLeft: "20px" }}>{title}</h1>
              <div className="about-content scrollable">
                <div className="avatar">
                  <div className="image"></div>
                  <div className="id">+91-9425959123</div>
                  <div className="id">skype: yogeshbangar</div>
                </div>
                <div className="paragraphs">
                  <div>
                    <span>
                      HI, I AM Yogesh Bangar. I AM A FULL STACK WEB DEVELOPER
                      BASED IN ESSAOUIRA, MOROCCO. THIS WEBSITE IS A PERSONAL
                      PROJECT THAT SERVES AS A PORTFOLIO. BUILT USING REACT,
                      THREE.JS/REACT-THREE-FIBER AND BLENDER. FEEL FREE TO
                      CONTACT ME USING THE CONTACT PAGE OR THROUGH ONE OF THE
                      SOCIAL MEDIA PROFILES.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-dkPtRN jJxhgQ"></div>
        </div>
      </div>
      <style jsx global>{`
        .gCPXug {
          margin: auto 0px;
          /* grid-column: 3 / 4; */
        }
        .edvhnN .about-content .avatar .image {
          width: 100%;
          height: 100%;
          opacity: 0.8;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(179, 179, 179);
          border-image: initial;
          background: url(https://media-exp1.licdn.com/dms/image/C4D03AQGn6WcQjW1dCw/profile-displayphoto-shrink_800_800/0/1516780518561?e=1671062400&v=beta&t=SAWrjrGnZenKeD9qLpgU-sdz_BrIZzP86v-_PG211a4)
            0% 0% / cover no-repeat;
          animation: 0.4s linear 0.8s 1 normal backwards running blink;
          background-position: center center;
        }

        .IJwLM .close {
          pointer-events: auto;
        }

        .IJwLM {
          max-width: 800px;
          color: rgb(193, 193, 193);
          clip-path: polygon(
            0px 0px,
            calc(100% - 30px) 0px,
            100% 30px,
            100% 100%,
            30px 100%,
            0px calc(100% - 30px),
            0px 0px
          );
          position: relative;
          text-shadow: rgb(255, 255, 255) 0px 0px 10px,
            rgb(255, 255, 255) 0px 0px 20px;
          background: repeating-linear-gradient(
                rgba(255, 255, 255, 0.12) 0px,
                rgba(255, 255, 255, 0.12) 1px,
                transparent 1px,
                transparent 100%
              )
              center center / 40px 40px,
            repeating-linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.12) 0px,
                rgba(255, 255, 255, 0.12) 1px,
                transparent 1px,
                transparent 100%
              )
              rgba(0, 0, 0, 0.6);
          border-top: 1px solid rgb(179, 179, 179);
          border-bottom: 1px solid rgb(179, 179, 179);
          animation: 0.4s linear 0s 1 normal backwards running blink;
          background-position: center center;
        }
        .IJwLM .close {
          width: 20px;
          height: 20px;
          position: absolute;
          right: 32px;
          top: 5px;
          cursor: pointer;
          border-width: 1px 2px 2px 1px;
          border-style: solid;
          border-color: rgb(172, 172, 172);
          border-image: initial;
          filter: drop-shadow(rgb(255, 255, 255) 0px 0px 2px);
          z-index: 2;
        }
        .gAWZmv {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .edvhnN {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .edvhnN .about-content {
          display: flex;
          padding: 20px;
          letter-spacing: 2px;
          min-height: 345px;
        }
        .edvhnN .about-content .avatar {
          width: 200px;
          height: 300px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          margin-right: 30px;
        }
        .jJxhgQ {
          height: 30px;
          width: 100%;
          background: rgba(0, 0, 0, 0.8);
          margin-top: auto;
        }
        @media (max-width: 576px) {
          .edvhnN .about-content {
            padding: 0px;
            letter-spacing: 0px;
          }
          .edvhnN .about-content .avatar {
            width: 110px;
            height: 200px;
            margin-right: 10px;
          }
          .IJwLM {
            background: rgba(0, 0, 0, 1.9);
            background-image: linear-gradient(#222, black);
          }
        }
      `}</style>
    </>
  );
};
export default About;
