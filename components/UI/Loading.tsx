const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <style jsx>{`
        .loader-container {
          display: inline-flex;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .loader {
          margin: auto;
          border: 20px solid #eaf0f6;
          border-radius: 50%;
          border-top: 20px solid #ff7a59;
          width: 100px;
          height: 100px;
          box-shadow: 0px 0px 50px 1px #ff9f9f;
          animation: spinner 4s linear infinite;
        }
        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
export default Loading;
