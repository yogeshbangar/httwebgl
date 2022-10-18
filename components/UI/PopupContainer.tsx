import XClose from "./XClose";

const PopupContainer = ({
  onClose,
  children,
  width = "80%",
  height = "auto",
  maxHeight = "none",
  maxWidth = "1200px",
  zIndex = 5,
  className = "",
}: {
  onClose?: () => void;
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  zIndex?: number;
  className?: string;
}) => {
  return (
    <div className={`PopupContainer fixed-full d-flex ${className}`}>
      <div className="content-container">
        {children}
        {onClose && (
          <div className="close-container">
            <XClose onClose={onClose} />
          </div>
        )}
      </div>

      <style jsx>{`
        .PopupContainer {
          background: rgba(0, 0, 0, 0.8) !important;
          display: flex;
          align-items: center;
          z-index: ${zIndex};
          padding-top: ${onClose ? "100px" : "150px"};
          border-radius: 0 !important;
        }
        .content-container {
          width: ${width};
          max-width: ${maxWidth};
          height: ${height};
          max-height: ${maxHeight};
          padding: 15px;
          margin: auto;
          z-index: ${zIndex};
          border-radius: 10px;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .close-container {
          position: absolute;
          top: 5px;
          right: 5px;
        }
      `}</style>
    </div>
  );
};

export default PopupContainer;
