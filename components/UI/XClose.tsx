const XClose = ({
  onClose,
  title,
}: {
  onClose: () => void;
  title?: string;
}) => {
  return (
    <>
      <div className="close" onClick={onClose}>
        <span style={{ margin: "6px", pointerEvents: "auto" }}>
          {title ? title : "x"}
        </span>
      </div>
      <style jsx>{`
        .close {
          pointer-events: auto;
          border: 1px solid;
          background: #000;
        }
      `}</style>
    </>
  );
};
export default XClose;
