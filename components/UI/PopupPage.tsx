import React from "react";
import Loading from "./Loading";
import PopupContainer from "./PopupContainer";

const PopupPage = ({ onClose, url }: { onClose?: () => void; url: string }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  return (
    <PopupContainer
      zIndex={100000}
      className="popup-iframe"
      maxWidth="90vw"
      onClose={onClose}
    >
      <iframe
        id="content-popup"
        src={url}
        className={`iframe-container ${pageLoaded ? "loaded" : ""}`}
        onLoad={() => setPageLoaded(true)}
        tabIndex={-1}
        onError={(e) => console.log("e->", e)}
        allowFullScreen
      />
      {!pageLoaded && <Loading />}
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
