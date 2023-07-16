import React, { useContext } from "react";
import { Player, BigPlayButton, PosterImage } from "video-react";
import baseURL from "../../context/baseURL";

function Video() {
  const baseUrl = useContext(baseURL);

  return (
    <div className="video-container">
      <h2>Kenaz TV</h2>
      <div className="video-wrapper">
        <Player
          poster={`${baseUrl}/src/images/articleImages/image17.png`}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
      <p>August 26, 2013</p>
      <h3>NASA releases portrait of a planet waving at Saturn</h3>
    </div>
  );
}

export default Video;
