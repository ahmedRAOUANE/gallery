import react from "react";

// css styles
import "./appContainer.css";

// components
import ImgHolder from "../imgHolder/ImgHolder";
import AudioHolder from "../audioHolder/AudioHolder";

const AppCotainer = () => {
  return (
    <div className="app-holder">
      <ImgHolder />
      <div className="audio-container">
        <AudioHolder />
      </div>
    </div>
  );
};

export default AppCotainer;
