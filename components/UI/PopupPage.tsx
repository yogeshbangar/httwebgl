import React from "react";
import PopupContainer from "./PopupContainer";

const PopupPage = ({ onClose, url }: { onClose?: () => void; url: string }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>();
  return (
    <PopupContainer
      zIndex={100000}
      className="popup-iframe"
      maxWidth="90vw"
      onClose={() => {
        console.log("~~~~~~~~~~~~~~~");
        onClose();
      }}
    >
      <iframe
        id="content-popup"
        src={url}
        className={`iframe-container ${pageLoaded ? "loaded" : ""}`}
        ref={iframeRef}
        onLoad={() => setPageLoaded(true)}
        tabIndex={-1}
        onError={(e) => console.log("e->", e)}
        allowFullScreen
      />
      <style>{`
       .iframe-container {
        width: 90vw;
        height: 90vh;
        border: none;
        background: #fff;
        
        transition: all 1s linear;
        transition-delay: 0.5s;
      }
      .popup-iframe{
        padding-top: 5vh! important;
      }
      `}</style>
    </PopupContainer>
  );
};
export default PopupPage;
