import "./imgHolder.css";

const ImgHolder = () => {
  return (
    <div className="img-container">
      <div>headers</div>
      <div className="img-holder">img holder</div>
      <div className="controlers">
        <button>prev</button>
        <button>start</button>
        <button>next</button>
      </div>
    </div>
  );
};

export default ImgHolder;
