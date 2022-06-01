import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

export const MusicPlayer: FunctionComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPauseIcon = isPlaying ? faPause : faPlay;

  const onClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>this would be a media player</div>
      <div>
        <button>
          <FontAwesomeIcon icon={faBackwardStep} fixedWidth />
        </button>
        <button onClick={onClick}>
          <FontAwesomeIcon icon={playPauseIcon} fixedWidth />
        </button>
        <button>
          <FontAwesomeIcon icon={faForwardStep} fixedWidth />
        </button>
      </div>
    </div>
  );
};
