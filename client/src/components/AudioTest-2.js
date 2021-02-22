import React, { Component } from "react"
import Speaker from "../assets/Speaker-on.png";

export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
          <img onClick={this.playAudio}
            src={Speaker}
            style={{
              width: "100px",
              hight: "100px",
            }}
            alt="Speaker icon"
          />
        <audio className="audio-element">
          <source src="https://www.fesliyanstudios.com/musicfiles/2019-02-07_-_Goofy_Prank_-_www.fesliyanstudios.com_-_David_Renda.mp3"></source>
        </audio>
      </div>
    )
  }
}