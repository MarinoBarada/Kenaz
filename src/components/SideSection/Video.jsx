import React from "react";
import { Player, BigPlayButton, PosterImage } from "video-react";

function Video() {
  return (
    <div className="video-container">
      <h2>Kenaz TV</h2>
      <div className="video-wrapper">
        <Player
          poster={
            "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
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
