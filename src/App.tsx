import { FunctionComponent } from "react";
import { MusicPlayer } from "./MusicPlayer";

export const App: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <MusicPlayer />
      <div id="game" />
    </div>
  );
};
