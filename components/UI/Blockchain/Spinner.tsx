const Spinner = ({ radius, border }: { radius?: string; border?: string }) => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <style>{`
        @keyframes spinner {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .loading-spinner {
            width: ${radius || "20px"};
            height: ${radius || "20px"};
            border: ${border || "5px"} solid #ccc;
            border-top: ${border || "5px"} solid #383636;
            border-radius: 70%;
            animation: spinner 1.5s linear infinite;
            margin: auto;
        }`}</style>
    </div>
  );
};
export default Spinner;
