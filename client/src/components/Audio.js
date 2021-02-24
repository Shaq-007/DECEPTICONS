import React from "react";
import Music from "../assets/MusicalNotes.svg";
import SpeakerOn from "../assets/SoundOn.svg";
import SpeakerOff from "../assets/SoundOff.svg";

class PlaySound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
    };

    this.url =
      "https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3";
    this.audio = new Audio(this.url);
    this.audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    const wasPlaying = this.state.play;
    this.setState({
      play: !wasPlaying,
    });

    if (wasPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  render() {
    return (
      <div>
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            marginRight: "10px",
          }}
          id="audioBtn"
          onClick={this.togglePlay}
        >
          <img
            src={Music}
            style={{ width: "50px", height: "50px" }}
            alt="music notes"
          />
        </button>
        {this.state.play ? (
          <img
            src={SpeakerOn}
            style={{
              width: "30px",
              height: "50px",
              background: "none",
              border: "none",
              transform: "rotate(90deg)",
            }}
            alt="music on"
          />
        ) : (
          <img
            src={SpeakerOff}
            style={{ width: "30px", height: "50px" }}
            alt="music off"
          />
        )}
      </div>
    );
  }
}

export default PlaySound;
