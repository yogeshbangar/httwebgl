const Styles = () => {
  return (
    <style jsx global>{`
      body {
        margin: 0;
        color: #fff;
        background: #000;
      }
      .flex-clm {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      .flex-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    `}</style>
  );
};

export default Styles;
